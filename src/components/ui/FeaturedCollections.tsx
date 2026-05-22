'use client';

import Image from 'next/image';
import { useState } from 'react';
import PopupForm from '@/components/ui/PopupForm';

const items = [
  {
    title: '£35 per person',
    img: '/images/service-2.webp',
    anchor: 'service-2',
  },
  {
    title: 'Book',
    img: '/images/service-1.webp',
    anchor: 'service-1',
  },
  {
    title: '£20 per child',
    img: '/images/service-3.webp',
    anchor: 'service-3',
  },
];

export default function FeaturedCollections() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="py-8 md:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-10 font-cormorant text-[45px] md:text-[64px] italic leading-none">
            Our services
          </h2>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {items.map((item) => (
              <div key={item.anchor}>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="mb-6 w-full object-cover"
                />

                <button
                  onClick={() => setOpen(true)}
                  className="
                    mt-8 border rounded-[2px]
                    px-6 py-3 sm:px-8 sm:py-4
                    font-roboto font-medium uppercase leading-none
                    text-[12px] sm:text-[18px] lg:text-[20px]
                    bg-[#EEF5F1]
                    shadow-[0_0_20px_5px_rgba(238,245,241,0.5)]
                    transition
                    hover:opacity-60
                    animate-pulse-slow
                  "
                >
                  {item.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PopupForm isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
