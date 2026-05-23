// 'use client';

// import Image from 'next/image';
// import { useCallback, useEffect, useState } from 'react';

// const images = [
//   '/images/gallery-2.webp',
//   '/images/gallery-6.webp',
//   '/images/gallery-7.webp',
//   '/images/gallery-8.webp',
//   '/images/gallery-9.webp',
//   '/images/gallery-10.webp',
//   '/images/gallery-11.webp',
//   '/images/gallery-13.webp',
//   '/images/gallery-14.webp',
//   '/images/gallery-15.webp',
// ];

// export default function Gallery() {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const close = useCallback(() => setActiveIndex(null), []);

//   const prev = useCallback(() => {
//     setActiveIndex((prev) => (prev === null ? null : prev === 0 ? images.length - 1 : prev - 1));
//   }, []);

//   const next = useCallback(() => {
//     setActiveIndex((prev) => (prev === null ? null : prev === images.length - 1 ? 0 : prev + 1));
//   }, []);

//   useEffect(() => {
//     if (activeIndex === null) return;

//     const handler = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') close();
//       if (e.key === 'ArrowLeft') prev();
//       if (e.key === 'ArrowRight') next();
//     };

//     window.addEventListener('keydown', handler);
//     return () => window.removeEventListener('keydown', handler);
//   }, [activeIndex, close, prev, next]);

//   return (
//     <>
//       <section className="mx-auto max-w-[1500px] px-4 py-20 md:px-8">
//         <div className="mb-14 flex items-end justify-between border-b border-black pb-6">
//           <h1 className="font-cormorant text-[48px] italic font-light leading-none text-black md:text-[84px]">
//             Gallery
//           </h1>

//           <p className="hidden text-xs uppercase tracking-[0.35em] text-neutral-500 md:block">
//             Selected photos
//           </p>
//         </div>

//         <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
//           {images.map((src, index) => (
//             <button
//               key={src + index}
//               onClick={() => setActiveIndex(index)}
//               className={`
//                 group relative overflow-hidden bg-[#f8f5f1]
//                 ${index === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-[16/10]'}
//               `}
//             >
//               <Image
//                 src={src}
//                 alt={`Gallery image ${index + 1}`}
//                 fill
//                 className="object-cover transition duration-700 group-hover:scale-[1.04]"
//               />

//               <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />

//               <div className="absolute bottom-5 left-5 text-xs uppercase tracking-[0.35em] text-white opacity-0 transition duration-500 group-hover:opacity-100">
//                 View photo
//               </div>
//             </button>
//           ))}
//         </div>
//       </section>

//       {activeIndex !== null && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-4"
//           onClick={close}
//         >
//           <button
//             onClick={close}
//             className="absolute right-5 top-5 z-20 text-3xl text-white"
//             aria-label="Close gallery"
//           >
//             ✕
//           </button>

//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               prev();
//             }}
//             className="absolute left-4 z-20 text-6xl text-white md:left-8"
//             aria-label="Previous image"
//           >
//             ‹
//           </button>

//           <div className="relative h-[85vh] w-full max-w-7xl" onClick={(e) => e.stopPropagation()}>
//             <Image
//               src={images[activeIndex]}
//               alt="Selected gallery image"
//               fill
//               priority
//               className="object-contain"
//             />
//           </div>

//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               next();
//             }}
//             className="absolute right-4 z-20 text-6xl text-white md:right-8"
//             aria-label="Next image"
//           >
//             ›
//           </button>
//         </div>
//       )}
//     </>
//   );
// }

'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

const images = [
  '/images/gallery-2.webp',
  '/images/gallery-6.webp',
  '/images/gallery-7.webp',
  '/images/gallery-8.webp',
  '/images/gallery-9.webp',
  '/images/gallery-10.webp',
  '/images/gallery-11.webp',
  '/images/gallery-13.webp',
  '/images/gallery-14.webp',
  '/images/gallery-15.webp',
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev === null ? null : prev === 0 ? images.length - 1 : prev - 1));
  }, []);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev === null ? null : prev === images.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [activeIndex, close, prev, next]);

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="mb-10 text-center md:mb-14">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
            Selected photos
          </p>

          <h1 className="font-cormorant text-[52px] italic font-light leading-none text-black md:text-[86px]">
            Gallery
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {images.map((src, index) => (
            <button
              key={src + index}
              onClick={() => setActiveIndex(index)}
              className="group relative aspect-[16/10] overflow-hidden bg-[#f7f4ef]"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />

              <span className="absolute bottom-5 left-5 text-xs uppercase tracking-[0.3em] text-white opacity-0 transition duration-500 group-hover:opacity-100">
                View photo
              </span>
            </button>
          ))}
        </div>
      </section>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-4"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute right-5 top-5 z-20 text-3xl text-white"
            aria-label="Close gallery"
          >
            ✕
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 z-20 text-6xl text-white md:left-8"
            aria-label="Previous image"
          >
            ‹
          </button>

          <div
            className="relative h-[80vh] w-full max-w-7xl md:h-[86vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIndex]}
              alt="Selected gallery image"
              fill
              priority
              className="object-contain"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 z-20 text-6xl text-white md:right-8"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
