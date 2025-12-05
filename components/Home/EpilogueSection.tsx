import { General } from '@/components';

export default function EpilogueSection() {
  return (
    <section className="w-full py-32 bg-stone-50 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto space-y-10">
          <span className="font-serif text-stone-400 italic text-lg block">
            Epilogue
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900">
            Your story is waiting.
          </h2>
          <p className="text-xl text-stone-600 font-light leading-relaxed">
            The noise will always be there. But you don't have to listen to it.
            Step into the quiet.
          </p>
          <div className="flex justify-center pt-8">
            <General.ButtonComponent size="lg" variant="primary" className="px-12">
              Begin Your Chapter
            </General.ButtonComponent>
          </div>
        </div>
      </div>
    </section>
  );
}


