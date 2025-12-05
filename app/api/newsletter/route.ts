import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // optional for Next.js caching control

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Use SERVICE ROLE key for inserts (server-side only!)
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

export async function POST(request: Request) {
  try {
    const { email, recaptchaToken } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
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

    // Check if email already exists
    const { data: existingData, error: checkError } = await supabase
      .from("newsletter")
      .select("email")
      .eq("email", email.toLowerCase().trim())
      .single();

    if (checkError && checkError.code !== "PGRST116") {
      // PGRST116 is "not found" error, which is expected for new emails
      throw checkError;
    }

    if (existingData) {
      return NextResponse.json(
        {
          error: "This email is already subscribed to our newsletter",
          code: "DUPLICATE_EMAIL"
        },
        { status: 409 } // Conflict status
      );
    }

    // Insert the subscriber
    const { data, error } = await supabase
      .from("newsletter")
      .insert([
        {
          email: email.toLowerCase().trim(),
          status: "subscribed",
        },
      ])
      .select();

    if (error) {
      // Check for duplicate key error (PostgreSQL unique constraint violation)
      if (error.code === "23505" || error.message?.includes("duplicate") || error.message?.includes("unique")) {
        return NextResponse.json(
          {
            error: "This email is already subscribed to our newsletter",
            code: "DUPLICATE_EMAIL"
          },
          { status: 409 }
        );
      }
      throw error;
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.message || "Unknown error" },
      { status: 500 }
    );
  }
}

