export default function JoinUsSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8">Join us</h2>
          
          {/* Image - matching Meta's clean layout */}
          <div className="mb-12">
            <div className="w-full overflow-hidden bg-stone-100">
              <img
                src="https://picsum.photos/seed/workvar-team/1200/675?grayscale"
                alt="Join the WorkVar team"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 text-lg md:text-xl text-stone-600 leading-relaxed font-light font-serif">
            <p>
              At WorkVar, we want you to build a career where you&apos;re challenged, valued, and learning from the best. Join us to build the future of focused work and the technology that makes it possible.
            </p>
            <p>
              We&apos;re always looking for people who share our mission of creating technology that serves people rather than exploiting their attention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

