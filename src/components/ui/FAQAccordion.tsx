'use client';

import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: 'Do I need painting experience to join?',
    answer:
      'Not at all — our art classes are designed for beginners and all experience levels. Our professional artist guides you step by step throughout the session.',
  },
  {
    question: 'Are all painting materials included?',
    answer:
      'Yes! We provide everything you need, including canvases, paints, brushes, easels, and aprons.',
  },
  {
    question: 'Where do the beach art classes take place?',
    answer:
      'Our weekend beach sessions are held on the beautiful Bournemouth and Wormhout coastline, depending on weather conditions.',
  },
  {
    question: 'Can I book a private art event for a birthday or celebration?',
    answer:
      'Absolutely! We organise private and mobile art experiences for birthdays, hen parties, family gatherings, corporate events, and special occasions.',
  },
  {
    question: 'Do you travel to private locations?',
    answer:
      'Yes — we can bring the full art experience to your chosen location, including homes, gardens, beaches, hotels, and event venues.',
  },
  {
    question: 'Are the classes suitable for children?',
    answer:
      'Yes, we offer creative workshops for both adults and children. Kids’ sessions are fun, relaxing, and designed to encourage creativity and confidence.',
  },
  {
    question: 'How can I book a class or event?',
    answer:
      'You can contact us directly through the website to reserve your spot or discuss your private event ideas and preferred location.',
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-5xl px-4 py-20">
      {/* TITLE */}
      <h2 className="mb-16 text-center font-cormorant text-[40px] italic font-light leading-[100%] md:text-[64px]">
        Frequently asked questions
      </h2>

      <div className="divide-y divide-gray-300">
        {faqData.map((item, index) => (
          <div key={index} className="py-6 md:py-8">
            {/* QUESTION */}
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="font-robotoCondensed text-[18px] font-normal uppercase leading-[100%] md:text-[22px]">
                {item.question}
              </span>

              <span
                className={`ml-6 inline-block h-0 w-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-gray-500 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* ANSWER */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'mt-6 max-h-[400px]' : 'max-h-0'
              }`}
            >
              <p className="font-robotoCondensed text-[16px] font-light leading-[100%] text-gray-600 md:text-[18px]">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
