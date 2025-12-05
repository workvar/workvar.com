'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { Sparkles } from 'lucide-react';
import { General } from '@/components';
import { Product } from '@/types';

interface ProductDetailProps {
  product: Product;
  index: number;
}

export default function ProductDetail({ product, index }: ProductDetailProps) {
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (imageRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.fromTo(
                imageRef.current,
                { opacity: 0, scale: 0.95 },
                { opacity: 1, scale: 1, duration: 1 }
              );
              observer.unobserve(entry.target);
            }
          });
        },
        { once: true }
      );
      observer.observe(imageRef.current);
    }
  }, []);

  return (
    <section
      className={`w-full py-20 md:py-32 ${
        index % 2 === 0 ? 'bg-white' : 'bg-stone-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col gap-16 items-center ${
            index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
          }`}
        >
          <div
            ref={imageRef}
            className="flex-1 w-full"
          >
            <div className="rounded-[3rem] overflow-hidden bg-stone-100 aspect-[4/5] relative shadow-2xl shadow-stone-200/50">
              <img
                src={`https://picsum.photos/seed/${product.id}art/1000/1200?grayscale`}
                alt={product.name}
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-1000"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-stone-100">
                <div className="flex items-center text-xs font-bold tracking-widest uppercase text-forest-800 mb-2">
                  <Sparkles size={12} className="mr-2" /> Signature Feature
                </div>
                <p className="font-serif text-xl text-stone-900 italic">
                  {product.features[0]}
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-10">
            <div>
              <div className="font-serif text-9xl text-stone-100 absolute -translate-y-16 -translate-x-6 -z-10 select-none">
                0{index + 1}
              </div>
              <h2 className="text-5xl md:text-7xl font-serif text-stone-900 mb-4">
                {product.name}
              </h2>
              <h3 className="text-2xl text-forest-800 font-serif italic mb-8">
                {product.tagline}
              </h3>

              <div className="prose prose-lg text-stone-600 font-light leading-loose mb-10">
                <p>{product.description}</p>
              </div>

              <div className="space-y-4 mb-12 border-l border-stone-300 pl-8">
                <h4 className="font-serif text-stone-900 text-lg">Capabilities</h4>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="text-stone-600 font-serif italic">
                      — {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-6">
                <General.ButtonComponent size="lg" variant="primary">
                  {product.cta}
                </General.ButtonComponent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


