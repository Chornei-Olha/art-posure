export default function ServicesPage() {
  return (
    <main className="bg-[#f8f5f1] text-[#1f1f1f]">
      {/* Weekend Beach Art Class */}
      <section id="weekend-beach-art-class" className="scroll-mt-32 py-24 border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.2em] text-sm text-black/50 mb-4">
              POSTURE Art Experience
            </p>

            <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">
              Weekend Beach
              <br />
              Art Class
            </h1>

            <p className="text-lg leading-relaxed text-black/70 mb-8">
              Experience a creative escape by the sea with guided weekend art sessions on the
              beautiful Bournemouth coastline.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <div className="px-5 py-3 rounded-full border border-black/10 bg-white">
                £35 per person
              </div>

              <div className="px-5 py-3 rounded-full border border-black/10 bg-white">
                2.5-hour experience
              </div>

              <div className="px-5 py-3 rounded-full border border-black/10 bg-white">
                Beginner friendly
              </div>
            </div>

            <p className="text-base leading-relaxed text-black/70">
              Create your own artwork, enjoy the fresh sea air, and take your painting home with
              you. Each session is designed to be relaxing, inspiring, and suitable for all
              experience levels.
            </p>
          </div>

          <div className="bg-white rounded-[32px] p-8 shadow-sm border border-black/5">
            <h2 className="text-2xl font-medium mb-6">What’s Included</h2>

            <ul className="space-y-4 text-black/75">
              {[
                '2.5-hour guided painting experience',
                'Professional artistic guidance',
                'Assistant support during the session',
                'All painting materials provided',
                'Relaxed seaside atmosphere',
                'Suitable for beginners and all levels',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-black" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="mt-10 w-full bg-black text-white py-4 rounded-full hover:opacity-90 transition">
              Book Your Place
            </button>
          </div>
        </div>
      </section>

      {/* Private & Mobile Art Events */}
      <section id="private-mobile-art-events" className="scroll-mt-32 py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 bg-white rounded-[32px] p-8 shadow-sm border border-black/5">
            <h2 className="text-2xl font-medium mb-6">Perfect For</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Birthday parties',
                'Corporate events',
                'Private celebrations',
                'Family gatherings',
                'Hen parties',
                'Creative social events',
                'Outdoor venues',
                'Indoor venues',
              ].map((item) => (
                <div
                  key={item}
                  className="border border-black/10 rounded-2xl px-5 py-4 bg-[#faf8f5]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="uppercase tracking-[0.2em] text-sm text-black/50 mb-4">
              Mobile Creative Experience
            </p>

            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
              Private & Mobile
              <br />
              Art Events
            </h2>

            <p className="text-lg leading-relaxed text-black/70 mb-8">
              Bring creativity to any occasion with fully guided private art experiences tailored to
              your event and location.
            </p>

            <div className="space-y-5 text-black/75 mb-10">
              <div className="flex gap-4">
                <span className="text-xl">•</span>
                <p>Full setup and all painting materials included</p>
              </div>

              <div className="flex gap-4">
                <span className="text-xl">•</span>
                <p>Professional artistic guidance throughout the session</p>
              </div>

              <div className="flex gap-4">
                <span className="text-xl">•</span>
                <p>Flexible locations chosen by the client</p>
              </div>

              <div className="flex gap-4">
                <span className="text-xl">•</span>
                <p>Suitable for beaches, homes, gardens, hotels, and event spaces</p>
              </div>
            </div>

            <p className="text-base leading-relaxed text-black/70">
              Every event is designed to feel creative, memorable, and relaxing for every guest —
              whether it’s an intimate gathering or a larger celebration.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
