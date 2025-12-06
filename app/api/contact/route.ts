import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function verifyRecaptchaToken(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.warn("RECAPTCHA_SECRET_KEY not set, skipping verification");
    return true; // Allow in development if key is not set
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}

// Simple in-memory rate limiting (for production, consider using Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds
const MAX_REQUESTS_PER_WINDOW = 3; // Max 3 submissions per hour per identifier

function getRateLimitKey(identifier: string): string {
  return `contact:${identifier}`;
}

function checkRateLimit(identifier: string): { allowed: boolean; remaining: number } {
  const key = getRateLimitKey(identifier);
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record || now > record.resetTime) {
    // New window or expired window
    rateLimitMap.set(key, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - 1 };
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    const remainingSeconds = Math.ceil((record.resetTime - now) / 1000);
    return { allowed: false, remaining: remainingSeconds };
  }

  record.count += 1;
  rateLimitMap.set(key, record);
  return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - record.count };
}

// Clean up old rate limit entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}, 5 * 60 * 1000); // Clean up every 5 minutes

export async function POST(request: Request) {
  try {
    const { name, email, subject, message, recaptchaToken } = await request.json();

    // Validation
    if (!name || !email || !subject) {
      return NextResponse.json(
        { error: "Name, email, and subject are required" },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA token
    if (!recaptchaToken) {
      return NextResponse.json(
        {
          error: "reCAPTCHA verification is required",
          code: "INVALID_RECAPTCHA",
        },
        { status: 400 }
      );
    }

    const isValidRecaptcha = await verifyRecaptchaToken(recaptchaToken);
    if (!isValidRecaptcha) {
      return NextResponse.json(
        {
          error: "reCAPTCHA verification failed. Please try again.",
          code: "INVALID_RECAPTCHA",
        },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Rate limiting based on email
    const rateLimitResult = checkRateLimit(email.toLowerCase().trim());
    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        {
          error: `Too many requests. Please try again in ${Math.ceil(rateLimitResult.remaining / 60)} minutes.`,
          code: "RATE_LIMIT_EXCEEDED",
          retryAfter: rateLimitResult.remaining,
        },
        { status: 429 }
      );
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from("contactus")
      .insert([
        {
          name_of_sender: name.trim(),
          sender_email: email.toLowerCase().trim(),
          topic: subject.trim(),
          message: message?.trim() || null,
          is_resolved: false,
          resolved_at: null,
        },
      ])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      
      // Check for duplicate or constraint violations
      if (error.code === "23505" || error.message?.includes("duplicate") || error.message?.includes("unique")) {
        return NextResponse.json(
          {
            error: "A submission with this information already exists",
            code: "DUPLICATE_ENTRY",
          },
          { status: 409 }
        );
      }

      return NextResponse.json(
        { error: "Failed to submit contact form. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data,
        message: "Contact form submitted successfully",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: error.message || "Unknown error occurred" },
      { status: 500 }
    );
  }
}

