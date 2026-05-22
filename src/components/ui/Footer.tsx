import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#EEF5F1]">
      {/* TOP */}
      <div className="mx-auto max-w-7xl px-6 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-3">
          {/* COLUMN 1 */}
          <div className="flex items-center justify-center md:items-start md:justify-start">
            <Image
              src="/images/logo-new.svg"
              alt="logo"
              width={200}
              height={100}
              className="opacity-80"
            />
          </div>

          {/* COLUMN 2 */}
          <div className="font-roboto text-[16px] leading-[130%]">
            <Link href="/" className="block mb-3">
              Home
            </Link>
            <Link href="/gallery" className="block mb-3">
              Gallery
            </Link>
            {/* <Link href="/services" className="block mb-3">
              Services
            </Link>{' '} */}
            <Link href="/faq" className="block mb-3">
              FAQ
            </Link>{' '}
          </div>

          {/* COLUMN 3 */}
          <div className="space-y-3 font-roboto text-[16px] leading-[130%]">
            <p className="mb-4 font-medium uppercase">CONTACT & LOCATION</p>
            <p>Bournemouth Coastline</p>
            <p className="pt-4">
              Phone:{' '}
              <a href="tel:+447493405945" className="text-blue-600 hover:underline">
                +44 7493 405945
              </a>
              <a href="tel:+3807340442350" className="text-blue-600 hover:underline">
                +38 073 40442350
              </a>
            </p>
            <p>
              Open-Air Creative Art by the Sea Fresh air • Nature • Creativity
              <a href="mailto:super_asanka@ukr.net" className="text-blue-600 hover:underline">
                super_asanka@ukr.net
              </a>
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-4 pt-6">
              <a
                href="https://wa.me/447342366339"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <Image src="/icons/whatsapp.svg" alt="" width={20} height={20} />
              </a>

              {/* <a
                href="https://t.me/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <Image src="/icons/telegram.svg" alt="" width={20} height={20} />
              </a> */}

              <a
                href="https://www.instagram.com/asanka_91/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Image src="/icons/instagram.svg" alt="" width={20} height={20} />
              </a>

              <a
                href="https://www.facebook.com/alena.san.ko.2025"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Image src="/icons/facebook.svg" alt="" width={20} height={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="h-px w-full bg-neutral-300" />

      {/* BOTTOM */}
      <div className="py-6 text-center font-roboto text-[14px] leading-none">
        Copyright © 2026 «Art POS|URE» | Created by{' '}
        <a
          href="https://www.instagram.com/olha_chornei/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Chornei Olha
        </a>
      </div>
    </footer>
  );
}
