import Link from 'next/link';
import Image from 'next/image';
import { General } from '@/components';

export default function HistorySection() {
  return (
    <section className="w-full py-20 md:py-32 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8">Our history</h2>
          
          {/* Image - matching Meta's clean layout */}
          <div className="mb-12">
            <div className="w-full overflow-hidden bg-stone-200">
              <Image
                src="https://picsum.photos/seed/workvar-history/1200/750?grayscale"
                alt="WorkVar history"
                width={1200}
                height={750}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 text-lg md:text-xl text-stone-600 leading-relaxed font-light font-serif mb-10">
            <p>
              WorkVar was born from a simple observation that the tools that we use to work are increasingly designed to capture our attention rather than serve our goals. When we launched our first product, SileoTube, we set out to prove that technology could be different. That we could build tools that respect your attention instead of competing for it.
            </p>
            <p>
              Today, WorkVar continues to evolve beyond reactive productivity tools toward a future where technology amplifies your focus rather than fragments it. We&apos;re building the next generation of productivity tools that put you in control of your attention and your time.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link href="/about">
              <General.ButtonComponent size="lg" variant="primary">
                Read our story
              </General.ButtonComponent>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

