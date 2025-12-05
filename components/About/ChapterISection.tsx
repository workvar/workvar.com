export default function ChapterISection() {
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
              The year was 2025. The founder sat alone in his home office surrounded by a soft glow of his screens. Jira tickets piled up, eSlack pings echoed like tiny alarms, and unread emails screamed URGENT. It was three in the morning and work was due in eight hours. He was trying to code, finish his work, so he could hug his pillows and slide into a slumber, but the world wouldn't let him.
            </p>
            <p>
              A notification slid onto the screen. Slowly, 3 AM became 4, 4 became 5, and 5 became 6 AM. All he had by the time he had to show his work was a pile of half-finished code and a feeling of dread. He realized this was not a one-off incident, it was a pattern. A pattern of distraction, a pattern of addiction.
            </p>
            <div className="pl-8 border-l-2 border-forest-800 py-4 my-10">
              <p className="text-stone-800 font-medium italic text-2xl">
                "We are drowning in information, while starving for wisdom."
              </p>
            </div>
            <p>
              WorkVar was born that night, as a survival mechanism. A simple script to block the noise. A shield against the chaos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


