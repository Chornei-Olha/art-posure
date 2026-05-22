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
            <p className="text-lg leading-relaxed text-black/70 mb-8">
              Enjoy a relaxing and inspiring 2.5-hour art experience where all materials are fully
              provided. Under the guidance of a professional artist and assistant instructor, even
              complete beginners will be able to create their own beautiful artwork to take home.
            </p>
            <p className="text-lg leading-relaxed text-black/70 mb-8">
              Whether you come alone, with friends, or as a family activity, this beachside art
              session is designed to be creative, calming, and beginner friendly.
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
              Create your own artwork, enjoy the fresh sea air, and experience creativity by the sea
              with POSTURE ART EXPERIENCE.
            </p>
          </div>

          <div className="bg-white rounded-[32px] p-8 shadow-sm border border-black/5">
            <h2 className="text-2xl font-medium mb-6">What’s Included</h2>

            <ul className="space-y-4 text-black/75">
              {[
                '2.5-hour guided experience',
                'All art materials included',
                'Beginner friendly',
                'Take your painting home',
                'Bournemouth coastline location',
                'Weekend sessions (weather permitting)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-black" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {/* 
            <button className="mt-10 w-full bg-black text-white py-4 rounded-full hover:opacity-90 transition">
              Book Your Place
            </button> */}
          </div>
        </div>
      </section>

      {/* Children’s Beach Art Experience */}
      <section id="service-3" className="scroll-mt-32 py-24 border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.2em] text-sm text-black/50 mb-4">
              Children’s Creative Session
            </p>

            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
              Children’s Beach
              <br />
              Art Experience
            </h2>

            <p className="text-lg leading-relaxed text-black/70 mb-6">
              Make your family beach day even more memorable with creative outdoor art activities
              designed especially for children.
            </p>

            <p className="text-base leading-relaxed text-black/70 mb-6">
              Children, accompanied by their parents or guardians, are welcome to join our relaxing
              beachside art sessions where imagination comes to life through colour, texture, and
              nature-inspired creativity.
            </p>

            <p className="text-base leading-relaxed text-black/70">
              A joyful and inspiring seaside art experience where children can paint, create,
              explore, and make unforgettable memories by the sea.
            </p>
          </div>

          <div className="bg-white rounded-[32px] p-8 shadow-sm border border-black/5">
            <h2 className="text-2xl font-medium mb-6">What’s Included</h2>

            <ul className="space-y-4 text-black/75">
              {[
                '£20 per child',
                '1-hour creative session',
                'All art materials included',
                'Canvases, paints, plaster figures & art clay provided',
                'Parent or guardian supervision required',
                'Beginner friendly',
                'Creative activities with shells, textures & mixed materials',
                'Outdoor beach art experience',
                'Bournemouth coastline location',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-black" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* Private Art Events & Creative Gatherings */}
      <section id="private-mobile-art-events" className="scroll-mt-32 py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 bg-white rounded-[32px] p-8 shadow-sm border border-black/5">
            <h2 className="text-2xl font-medium mb-6">Perfect For</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Private art events & celebrations',
                'Birthday parties & themed gatherings',
                'Garden parties & outdoor experiences',
                'Beachside creative sessions',
                'Family & friends experiences',
                'Fully personalised event planning',
                'Canvases, easels, chairs & art materials included',
                'Bournemouth & surrounding areas',
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
              Private Creative Experience
            </p>

            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
              Private Art Events
              <br />& Creative Gatherings
            </h2>

            <p className="text-lg leading-relaxed text-black/70 mb-6">
              Transform any occasion into a unique and memorable creative experience with
              personalised art events designed for adults, children, families, and groups of
              friends.
            </p>

            <p className="text-base leading-relaxed text-black/70 mb-6">
              Whether you are planning a birthday celebration, themed party, relaxing garden
              gathering, hen party, family event, or a creative outdoor experience by the sea,
              POSTURE ART EXPERIENCE offers bespoke artistic sessions tailored to your atmosphere
              and vision.
            </p>

            <p className="text-base leading-relaxed text-black/70 mb-6">
              Pricing, materials, location, session style, and group size are discussed individually
              depending on your event requirements.
            </p>

            <p className="text-base leading-relaxed text-black/70">
              Create meaningful memories through art, creativity, and beautiful shared moments.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
