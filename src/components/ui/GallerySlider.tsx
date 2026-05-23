'use client';

import Image from 'next/image';
import { useState } from 'react';

const slides = [
  {
    image: '/images/gallery-1.webp',
    title: 'Elegance',
    subtitle: 'Timeless moments',
    description: 'Every detail tells a story',
  },
  {
    image: '/images/gallery-4.webp',
    title: 'Atmosphere',
    subtitle: 'Captured beauty',
    description: 'Minimalism, light and emotion',
  },
  {
    image: '/images/gallery-5.webp',
    title: 'Visual Stories',
    subtitle: 'Editorial collection',
    description: 'Frames inspired by aesthetics',
  },
  {
    image: '/images/gallery-12.webp',
    title: 'Refined Mood',
    subtitle: 'Modern elegance',
    description: 'A balance of art and simplicity',
  },
];

export default function GallerySlider() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const getPosition = (index: number) => {
    if (index === current) return 'current';

    const nextIndex = current === slides.length - 1 ? 0 : current + 1;
    const prevIndex = current === 0 ? slides.length - 1 : current - 1;

    if (index === nextIndex) return 'next';
    if (index === prevIndex) return 'prev';

    return 'hidden';
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-4 py-20 text-white">
      {/* BLURRED BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src={slides[current].image}
          alt=""
          fill
          priority
          className="scale-110 object-cover opacity-40 blur-md transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* PREV */}
      <button
        onClick={prev}
        className="absolute left-4 z-30 text-6xl text-white/70 transition hover:text-white md:left-10"
        aria-label="Previous slide"
      >
        ‹
      </button>

      {/* SLIDES */}
      <div className="relative z-10 flex h-[560px] w-full max-w-5xl items-center justify-center">
        {slides.map((slide, index) => {
          const position = getPosition(index);

          return (
            <div
              key={slide.image}
              className={`
                absolute aspect-[2/3] w-[230px] transition-all duration-700 ease-in-out md:w-[300px]

                ${position === 'current' ? 'z-20 translate-x-0 scale-110 opacity-100' : ''}

                ${
                  position === 'next'
                    ? 'z-10 translate-x-[80%] scale-95 opacity-70 [transform:translateX(110%)_rotateY(-52deg)]'
                    : ''
                }

                ${
                  position === 'prev'
                    ? 'z-10 -translate-x-[80%] scale-95 opacity-70 [transform:translateX(-110%)_rotateY(52deg)]'
                    : ''
                }

                ${position === 'hidden' ? 'pointer-events-none scale-75 opacity-0' : ''}
              `}
            >
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover brightness-75"
                />
              </div>

              {position === 'current' && (
                <div className="absolute bottom-14 left-[-45px] z-30 max-w-[360px]">
                  <p className="text-sm uppercase tracking-[0.35em] text-white/70">
                    {slide.subtitle}
                  </p>

                  <h2 className="mt-2 font-cormorant text-[48px] italic leading-none md:text-[70px]">
                    {slide.title}
                  </h2>

                  <p className="mt-4 text-sm font-light tracking-wide text-white/80">
                    {slide.description}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* NEXT */}
      <button
        onClick={next}
        className="absolute right-4 z-30 text-6xl text-white/70 transition hover:text-white md:right-10"
        aria-label="Next slide"
      >
        ›
      </button>
    </section>
  );
}
