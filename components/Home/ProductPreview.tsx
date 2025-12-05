'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/general/Button';
import { PRODUCTS } from '@/constants';

interface ProductPreviewItemProps {
  product: (typeof PRODUCTS)[0];
  index: number;
}

function ProductPreviewItem({ product, index }: ProductPreviewItemProps) {
  return (
    <div
      className={`flex flex-col md:flex-row gap-16 items-center ${
        index % 2 !== 0 ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className="flex-1 w-full">
        <div className="relative rounded-t-[10rem] rounded-b-[3rem] overflow-hidden aspect-[4/5] md:aspect-[3/4]">
          <img
            src={`https://picsum.photos/seed/${product.id}/900/1200?grayscale`}
            alt={product.name}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 opacity-90 hover:scale-105 ease-out"
          />
          <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply" />
        </div>
      </div>
      <div className="flex-1 space-y-8 text-center md:text-left">
        <div className="inline-block border-b border-forest-800 pb-1 text-forest-800 font-serif italic text-lg">
          Artifact No. 0{index + 1}
        </div>
        <h3 className="text-5xl md:text-7xl font-serif text-stone-900">
          {product.name}
        </h3>
        <p className="text-xl text-stone-500 font-serif italic">
          {product.tagline}
        </p>
        <p className="text-lg text-stone-600 leading-loose font-light">
          {product.description}
        </p>
        <div className="pt-6 flex justify-center md:justify-start">
          <Link href="/products">
            <Button variant="outline" size="md">
              Inspect Artifact
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ProductPreview() {
  return (
    <section id="artifacts" className="w-full py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-serif text-stone-400 italic text-lg block mb-4">
            Chapter III
          </span>
          <h2 className="text-4xl md:text-6xl font-serif mb-6 text-stone-900">
            Artifacts for the Mind
          </h2>
          <p className="text-stone-500 text-xl font-light">
            We have forged instruments to aid you in your rebellion against the noise and to make you more productive.
          </p>
        </div>

        <div className="space-y-32">
          {PRODUCTS.slice(0, 2).map((product, i) => (
            <ProductPreviewItem key={product.id} product={product} index={i} />
          ))}
        </div>

        <div className="mt-24 text-center">
          <Link
            href="/products"
            className="inline-flex items-center text-xl font-serif text-forest-800 hover:text-forest-600 transition-colors border-b border-transparent hover:border-forest-600 pb-1"
          >
            View the full collection <ArrowRight size={20} className="ml-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}


