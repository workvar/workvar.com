import Image from 'next/image';

interface Principle {
  title: string;
  description: string;
  imageSeed: string;
}

export default function PrinciplesSection() {
  const principles: Principle[] = [
    {
      title: 'Give people clarity',
      description: "The modern world isn't short on possibilities, but it's drowning in noise. Every tap, every notification, every new tab is a demand for attention that pulls us away from the life we're actually trying to build. Clarity isn't a luxury anymore, it's survival. We believe everyone deserves to know what matters most in their day. We develop products that cut through the chaos, uncover the signal beneath the distraction, and help you move forward with conviction and purpose.",
      imageSeed: 'clarity',
    },
    {
      title: 'Build focus and control',
      description: "Focus is freedom. It's the power to choose where your mind goes instead of having it taken from you. When everything around us competes for our attention, simply staying present becomes a heroic act. We design tools that protect that focus — shielding you from what drains your energy and strengthening your ability to direct your own life. When you control your attention, you control your outcomes.",
      imageSeed: 'focus',
    },
    {
      title: 'Serve everyone',
      description: "Access to focus shouldn't depend on income, privilege, or geography. WorkVar exists for anyone who wants to reclaim their attention, whether they're a student hustling in a cafe or a founder building the future. That’s why we’re committed to offering tools that remain free and open. The right to work without interruption — to think deeply, learn, create, and build — belongs to everyone.",
      imageSeed: 'serve',
    },
    {
      title: 'Keep people safe and protect privacy',
      description: "Your attention data is incredibly personal — a blueprint of how your mind works. We believe it should stay yours. Unlike platforms that exploit behavior, we refuse to track or sell the very moments that define your life. Everything we create starts with trust: secure by default, local by design, transparent in every decision. When you know your digital environment is safe, your mind is free to do its best work.",
      imageSeed: 'privacy',
    },
    {
      title: 'Promote sustainable productivity',
      description: "Success shouldn't require sacrificing your well-being. We reject the outdated idea that productivity is about endless output and constant motion. True progress comes from focus, energy, and balance — the kind that lasts beyond a single burst of motivation. Our mission is to support work that feels satisfying, not exhausting. To help people achieve more by burning out less. To show that doing what matters is always more powerful than doing everything.",
      imageSeed: 'productivity',
    },
  ];

  return (
    <section className="w-full py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-forest-800 mb-6">Our principles</h2>
          <p className="text-xl text-stone-600 leading-relaxed font-light font-serif">
            WorkVar is building technology that helps you reclaim your focus and achieve meaningful work. Our principles embody what we stand for and guide our approach to how we build.
          </p>
        </div>

        {/* Intro Image */}
        <div className="mx-auto mb-20">
          <div className="w-full overflow-hidden bg-stone-100">
            <img
              src="https://picsum.photos/seed/workvar-principles/1200/675?grayscale"
              alt="Our principles"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Principles with Alternating Layout */}
        <div className="space-y-0">
          {principles.map((principle, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="py-12 md:py-16">
                <div className="max-w-6xl mx-auto py-8">
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${!isEven ? 'md:grid-flow-dense' : ''
                      }`}
                  >
                    {/* Image - Alternating sides */}
                    <div
                      className={`${!isEven ? 'md:col-start-2' : ''
                        } order-2 md:order-1`}
                    >
                      <div className="w-full overflow-hidden bg-stone-100 aspect-[16/9]">
                        <Image
                          src={`https://picsum.photos/seed/workvar-${principle.imageSeed}/1600/900?grayscale`}
                          alt={principle.title}
                          className="w-full h-full object-cover"
                          width={800}
                          height={600}
                        />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div
                      className={`${!isEven ? 'md:col-start-1 md:row-start-1' : ''
                        } order-1 md:order-2`}
                    >
                      <h3 className="text-2xl md:text-3xl font-serif text-forest-800 font-bold mb-4">
                        {principle.title}
                      </h3>
                      <p className="text-lg md:text-xl text-stone-600 leading-relaxed font-light font-serif">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

