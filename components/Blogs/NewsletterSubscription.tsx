'use client';

import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { General } from '@/components';
import { Check, X } from 'lucide-react';

export default function NewsletterSubscription() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setIsLoading(true);

    try {
      // Execute invisible reCAPTCHA
      const recaptchaToken = await recaptchaRef.current?.executeAsync();
      
      if (!recaptchaToken) {
        setMessage({ type: 'error', text: 'reCAPTCHA verification failed. Please try again.' });
        setIsLoading(false);
        return;
      }

      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, recaptchaToken }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage({
          type: 'error',
          text: data.error || 'Something went wrong. Please try again.',
        });
      } else {
        setMessage({
          type: 'success',
          text: 'Thank you! You have been subscribed to our newsletter.',
        });
        setEmail('');
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Something went wrong. Please try again.',
      });
    } finally {
      setIsLoading(false);
      recaptchaRef.current?.reset();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 border border-stone-300 rounded-full focus:outline-none focus:ring-2 focus:ring-forest-800 focus:border-transparent text-stone-900 placeholder-stone-400 font-sans"
            disabled={isLoading}
          />
          <General.ButtonComponent
            type="submit"
            variant="outline"
            disabled={isLoading}
            className="whitespace-nowrap"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </General.ButtonComponent>
        </div>

        {message && (
          <div
            className={`flex items-center gap-2 p-3 rounded-lg text-sm ${
              message.type === 'success'
                ? 'bg-forest-50 text-forest-800 border border-forest-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            {message.type === 'success' ? (
              <Check size={16} className="flex-shrink-0" />
            ) : (
              <X size={16} className="flex-shrink-0" />
            )}
            <span>{message.text}</span>
          </div>
        )}

        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
        />
      </form>
    </div>
  );
}

