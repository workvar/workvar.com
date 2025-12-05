export default function ProductHeader() {
  return (
    <section className="w-full pt-32 pb-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <span className="font-serif text-stone-400 italic text-xl mb-4 block">
            The Collection
          </span>
          <h1 className="text-5xl md:text-8xl font-serif text-stone-900 mb-10 leading-none">
            Tools for the <br />
            <span className="text-forest-800">Quiet Voyage.</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl leading-relaxed font-light font-serif">
            We do not build apps. We forge tools. Each one is a crafted response
            to a specific modern ailment—distraction, algorithm addiction, and the
            fragmentation of thought.
          </p>
        </div>
      </div>
    </section>
  );
}


