export default function StorySection() {
  return (
    <section className="w-full py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-serif text-stone-900 mb-6 sticky top-32 italic">
              Chapter I: The Noise
            </h2>
          </div>
          <div className="md:col-span-8 space-y-8 text-xl text-stone-600 leading-relaxed font-light font-serif">
            <p>
              The year was 2023. The founder sat in a small apartment,
              illuminated only by the blue light of a monitor. He was trying to
              write, but the world wouldn't let him.
            </p>
            <p>
              A notification slid onto the screen. A red dot appeared on a tab.
              An email arrived with "urgent" in the subject line. The thought he
              was holding slipped away, dissolving into the digital ether.
            </p>
            <p>
              He realized then that his computer, once a bicycle for the mind,
              had become an assembly line for his attention.
            </p>
            <div className="pl-8 border-l-2 border-forest-200 py-4 my-10">
              <p className="text-stone-800 font-medium italic text-2xl">
                "We are drowning in information, while starving for wisdom."
              </p>
            </div>
            <p>
              WorkVar was born that night. Not as a company, but as a survival
              mechanism. A simple script to block the noise. A shield against the
              chaos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


