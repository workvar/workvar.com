export default function PhilosophySection() {
  return (
    <section className="w-full py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <div className="rounded-t-full rounded-b-[1000px] overflow-hidden aspect-[3/4] border-4 border-stone-50 shadow-2xl">
              <img
                src="https://picsum.photos/seed/forest2/800/1000?grayscale"
                alt="The Forest"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2000ms]"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <span className="font-serif text-stone-400 italic text-xl mb-4 block">
              Chapter II: The Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8">
              Software as a Garden
            </h2>
            <p className="text-stone-600 mb-6 leading-relaxed text-lg font-light">
              Most software is built like a shopping mall—designed to keep you
              inside, distracted, and consuming.
            </p>
            <p className="text-stone-600 mb-8 leading-relaxed text-lg font-light">
              We build software like a garden. It is quiet. It grows slowly. It
              requires your care, but it gives back peace and sustenance. We
              don't track your footsteps in the garden. We don't sell tickets to
              your private thoughts.
            </p>
            <div className="pt-6">
              <span className="text-forest-800 font-serif text-xl italic">
                Welcome to the rebellion.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


