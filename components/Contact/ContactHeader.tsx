import { Feather } from 'lucide-react';

export default function ContactHeader() {
  return (
    <section className="w-full pt-32 pb-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Feather className="w-12 h-12 text-forest-800 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-serif text-stone-900 mb-6">
            Correspondence
          </h1>
          <p className="text-xl text-stone-500 font-light font-serif italic">
            "Words traverse the silence to connect us."
          </p>
        </div>
      </div>
    </section>
  );
}


