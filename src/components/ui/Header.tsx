'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full relative">
      {/* TOP DIVIDER */}
      <div className="h-px w-full bg-neutral-200" />

      {/* MAIN HEADER */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* LOGO */}
        <Link href="/" className="mr-auto">
          <Image src="/images/logo-new.svg" alt="logo" width={100} height={50} priority />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 font-roboto text-[18px] uppercase leading-none">
          <Link href="/">Home</Link>
          <Link href="/gallery">Gallery</Link>
          {/* <Link href="/services">Services</Link> */}
          <Link href="/faq">FAQ</Link>{' '}
        </nav>

        {/* BURGER BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-between w-6 h-5 ml-auto z-50"
          aria-label="Toggle menu"
        >
          <span
            className={`h-[2px] w-full bg-black transition ${
              open ? 'rotate-45 translate-y-[9px]' : ''
            }`}
          />
          <span className={`h-[2px] w-full bg-black transition ${open ? 'opacity-0' : ''}`} />
          <span
            className={`h-[2px] w-full bg-black transition ${
              open ? '-rotate-45 -translate-y-[9px]' : ''
            }`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed inset-0 bg-white transition-transform duration-300 z-40
        ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-10 font-roboto text-[24px] uppercase">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/gallery" onClick={() => setOpen(false)}>
            Gallery
          </Link>
          {/* <Link href="/services" onClick={() => setOpen(false)}>
            Services
          </Link> */}
          <Link href="/faq" onClick={() => setOpen(false)}>
            FAQ
          </Link>
        </nav>
      </div>

      {/* BOTTOM DIVIDER */}
      <div className="h-px w-full bg-neutral-200" />
    </header>
  );
}
