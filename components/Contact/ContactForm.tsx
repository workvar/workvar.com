'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';
import Button from '@/components/general/Button';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    setTimeout(() => {
      setIsSubmitted(true);
      reset();
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in fade-in duration-700">
        <div className="w-20 h-20 bg-forest-100 text-forest-700 rounded-full flex items-center justify-center mb-8">
          <Send size={32} />
        </div>
        <h3 className="text-3xl font-serif text-stone-900 mb-4">
          Letter Dispatched
        </h3>
        <p className="text-stone-600 font-serif italic text-lg">
          Your words are traveling to us. We shall reply in kind.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-12 text-sm text-forest-800 font-medium hover:text-forest-600 uppercase tracking-widest"
        >
          Write Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-bold text-stone-400 uppercase tracking-widest mb-3"
          >
            Who writes?
          </label>
          <input
            {...register('name', { required: true })}
            type="text"
            className="w-full px-0 py-3 bg-transparent border-b-2 border-stone-200 focus:border-forest-600 outline-none transition-colors text-xl text-stone-800 font-serif placeholder-stone-300"
            placeholder="Your name"
          />
          {errors.name && (
            <span className="text-red-500 text-xs mt-2 block font-serif italic">
              This field is required.
            </span>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-bold text-stone-400 uppercase tracking-widest mb-3"
          >
            Return Address
          </label>
          <input
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            type="email"
            className="w-full px-0 py-3 bg-transparent border-b-2 border-stone-200 focus:border-forest-600 outline-none transition-colors text-xl text-stone-800 font-serif placeholder-stone-300"
            placeholder="your@email.com"
          />
          {errors.email && (
            <span className="text-red-500 text-xs mt-2 block font-serif italic">
              A valid address is required.
            </span>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-bold text-stone-400 uppercase tracking-widest mb-3"
        >
          Topic of Discourse
        </label>
        <select
          {...register('subject')}
          className="w-full px-0 py-3 bg-transparent border-b-2 border-stone-200 focus:border-forest-600 outline-none transition-colors text-xl text-stone-800 font-serif cursor-pointer"
        >
          <option value="Inquiry">General Inquiry</option>
          <option value="Assistance">Request for Assistance</option>
          <option value="Tale">Share a Story</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-bold text-stone-400 uppercase tracking-widest mb-3"
        >
          The Message
        </label>
        <textarea
          {...register('message', { required: true })}
          rows={6}
          className="w-full px-0 py-3 bg-transparent border-b-2 border-stone-200 focus:border-forest-600 outline-none transition-colors resize-none text-xl text-stone-800 font-serif placeholder-stone-300 leading-relaxed"
          placeholder="Tell us what is on your mind..."
        />
        {errors.message && (
          <span className="text-red-500 text-xs mt-2 block font-serif italic">
            The page cannot be empty.
          </span>
        )}
      </div>

      <div className="pt-6 flex justify-end">
        <Button type="submit" size="lg" className="px-12">
          Send Letter
        </Button>
      </div>
    </form>
  );
}


