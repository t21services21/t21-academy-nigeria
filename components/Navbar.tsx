"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/pathways", label: "Career Pathways" },
  { href: "/certiport", label: "Certiport Centre" },
  { href: "/programmes", label: "Programmes" },
  { href: "/partners", label: "Partners & Funders" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur border-b border-primary-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="T21 Academy Nigeria"
              width={42}
              height={42}
              className="rounded-full"
            />
            <div className="hidden sm:block">
              <p className="text-white font-bold text-sm leading-tight font-playfair">
                T21 Academy Nigeria
              </p>
              <p className="text-primary-gold text-[10px] font-medium">
                Part of T21 Global Group &bull; Certiport Authorised Centre
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm text-gray-300 hover:text-primary-gold transition rounded-md hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
            <Link href="/apply" className="ml-3 btn-gold text-sm !py-2 !px-5">
              Apply Now
            </Link>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-black border-t border-primary-gold/20 px-4 pb-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-gray-300 hover:text-primary-gold transition border-b border-gray-800/50 text-sm"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/apply"
            onClick={() => setOpen(false)}
            className="block mt-3 btn-gold text-sm text-center !py-2"
          >
            Apply Now
          </Link>
        </div>
      )}
    </header>
  );
}
