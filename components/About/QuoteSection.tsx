import { Quote } from 'lucide-react';

export default function QuoteSection() {
  return (
    <section className="w-full py-32 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center relative px-8">
          <Quote className="absolute top-0 left-1/2 -translate-x-1/2 text-forest-100 w-32 h-32 -translate-y-16" />
          <p className="relative z-10 text-3xl md:text-5xl font-serif text-stone-800 leading-tight">
            We believe that attention is the most scarce resource of the 21st
            century. To protect it is an act of rebellion.
          </p>
        </div>
      </div>
    </section>
  );
}


