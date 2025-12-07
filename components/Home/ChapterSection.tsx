'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { CORE_FEATURES } from '@/constants';
import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  feature: {
    title: string;
    description: string;
    icon: LucideIcon;
  };
  index: number;
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (cardRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.fromTo(
                cardRef.current,
                { opacity: 0, y: 30 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  delay: index * 0.2,
                }
              );
              observer.unobserve(entry.target);
            }
          });
        }
      );
      observer.observe(cardRef.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="group p-8 text-center"
    >
      <div className="w-16 h-16 mx-auto bg-stone-50 text-stone-600 rounded-full flex items-center justify-center mb-8 group-hover:bg-forest-50 group-hover:text-forest-800 transition-colors duration-700">
        <feature.icon size={28} strokeWidth={1} />
      </div>
      <h3 className="text-2xl font-serif font-medium mb-6 text-stone-900">
        {feature.title}
      </h3>
      <p className="text-stone-500 leading-loose text-lg font-light">
        {feature.description}
      </p>
    </div>
  );
}

export default function ChapterSection() {
  return (
    <section id="chapter-1" className="w-full py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-serif text-stone-400 italic text-lg block mb-4">
            Chapter I
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900">
            Addressing the Noise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {CORE_FEATURES && CORE_FEATURES.length > 0 ? CORE_FEATURES.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          )) : null}
        </div>
      </div>
    </section>
  );
}


