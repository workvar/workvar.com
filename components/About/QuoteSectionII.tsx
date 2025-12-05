import { Quote } from 'lucide-react';

export default function QuoteSectionIIComponent() {
  return (
    <section className="w-full py-32 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center relative px-8">
          <Quote className="absolute top-0 left-1/2 -translate-x-1/2 text-forest-800 w-32 h-32 -translate-y-16 opacity-30" />
          <p className="relative z-10 text-3xl md:text-5xl font-serif text-stone-800 leading-tight">
            The internet monetizes distractions. You can choose not to sell.
          </p>
        </div>
      </div>
    </section>
  );
}


