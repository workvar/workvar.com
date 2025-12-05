'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { General } from '@/components';
import { HeroBackgroundComponent } from "./";

export default function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' }
      );
    }
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-center overflow-hidden bg-stone-50 py-24 md:py-36">
      <HeroBackgroundComponent />

      <div
        ref={contentRef}
        className="max-w-4xl mx-auto space-y-12 px-4 relative z-10"
      >
        <div className="font-serif italic text-stone-500 text-lg md:text-xl tracking-wider">
          Prologue
        </div>

        <h1 className="text-5xl md:text-8xl font-serif text-stone-900 leading-[1.1] tracking-tight">
          The world is loud. <br />
          <span className="text-forest-800">Your mind is quiet.</span>
        </h1>

        <p className="text-xl md:text-2xl text-stone-600 max-w-2xl mx-auto">
          We tell ourselves that we are busy. But often, we are just distracted. WorkVar is an invitation to return to the signal.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 pt-8">
          <Link href="/research">
            <General.ButtonComponent size="lg" variant="primary">
              Backed by research
            </General.ButtonComponent>
          </Link>
          <General.ButtonComponent
            variant="ghost"
            size="lg"
            onClick={() =>
              document
                .getElementById('chapter-1')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Read the Story
          </General.ButtonComponent>
        </div>
      </div>
    </section>
  );
}


