export default function RitualSection() {
  const steps = [
    { title: 'Clarity', text: 'Cut through the noise. When your goals and priorities are clear, decisions become effortless and focus follow naturally.' },
    { title: 'Focus', text: 'Protect your attention. Deep work thrives When distraction Speed and your environment supports single tasking.' },
    { title: 'Balance', text: "True productivity isn't about doing more. It's about doing what matters most without burning out." },
  ];

  return (
    <section className="w-full py-24 md:py-36 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="flex-1 space-y-8">
            <span className="font-serif text-stone-400 italic text-lg">
              Chapter II
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-stone-900 leading-tight">
              The Pillars of Productivity
            </h2>
            <p className="text-xl text-stone-600 font-light leading-relaxed">
              Productivity is not about doing more. It is about doing the right things at the right time. It is being in the right state of mind and a clutter free environment.
            </p>

            <div className="space-y-6 pt-4">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-forest-200 flex items-center justify-center text-forest-800 font-serif mr-4 mt-1">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-stone-800">
                      {step.title}
                    </h4>
                    <p className="text-stone-500 font-light">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-forest-100 to-stone-200 rounded-full blur-3xl opacity-30" />
            <div className="relative bg-white p-12 rounded-[2rem] shadow-sm border border-stone-100 ">
              <blockquote className="font-serif text-xl text-stone-800 leading-relaxed italic">
                "To produce meaning in a chaotic world, one must first build a
                wall of silence around the mind."
              </blockquote>
              <cite className="block mt-6 text-stone-400 font-sans text-sm tracking-widest not-italic">
                — The WorkVar Manifesto
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


