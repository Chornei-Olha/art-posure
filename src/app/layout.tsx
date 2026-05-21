import React from 'react';
import '../styles/index.css';
import { Roboto_Condensed, Cormorant_Garamond } from 'next/font/google';
import type { Metadata } from 'next';

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto-condensed',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['italic'],
  variable: '--font-cormorant',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://art-posure.vercel.app'),

  title: 'Beach Art Classes & Private Art Events in Bournemouth | ART POSURE',

  description:
    'Join relaxing beach art classes in Bournemouth or book private mobile art events for birthdays, corporate parties, celebrations, and creative workshops.',

  keywords: [
    'beach art classes',
    'art classes Bournemouth',
    'private art events',
    'mobile art workshops',
    'painting classes by the sea',
    'creative workshops',
    'kids craft workshops',
    'corporate art events',
    'birthday art parties',
  ],

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [{ url: '/images/favicon.webp' }],
  },

  openGraph: {
    title: 'Beach Art Classes & Private Art Events in Bournemouth | ART POSURE',

    description:
      'Creative beach painting experiences and private art workshops for events, parties, and celebrations.',

    url: 'https://art-posure.vercel.app/',

    siteName: 'ART POSURE',

    locale: 'en_GB',

    type: 'website',

    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ART POSURE Beach Art Classes',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Beach Art Classes & Private Art Events in Bournemouth | ART POSURE',

    description: 'Creative beach painting experiences and private art workshops.',

    images: ['/images/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoCondensed.variable} ${cormorant.variable}`}>
        {' '}
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'ART POSURE',
              url: 'https://art-posure.vercel.app',
              description: 'Beach art classes and private mobile art events in Bournemouth.',
              areaServed: 'Bournemouth',
            }),
          }}
        />
        <script
          type="module"
          src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fbuddhasa1071back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.7"
        ></script>
      </body>
    </html>
  );
}
