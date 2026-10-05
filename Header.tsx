"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { business } from "@/data/business";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pet Food & Accessories", href: "/products" },
  { label: "Appointment", href: "/appointment" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e3eae7] bg-white/95 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link href="/" className="min-w-0" onClick={() => setOpen(false)}>
          <div className="font-[var(--font-poppins)] text-lg font-bold leading-tight text-[#17201d]">
            Fortune Health
          </div>
          <div className="text-xs font-medium text-[#176b57]">
            Veterinary Services
          </div>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#46524e] transition hover:text-[#c62828]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
              "Hello Fortune Health Veterinary Services, I would like to make an enquiry."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#c62828] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#a61f1f]"
          >
            <MessageCircle size={17} />
            WhatsApp Us
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-[#17201d] lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#e3eae7] bg-white lg:hidden">
          <nav className="container-page flex flex-col py-3" aria-label="Mobile navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-[#eef2f0] py-4 text-sm font-semibold text-[#17201d]"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
                "Hello Fortune Health Veterinary Services, I would like to make an enquiry."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="my-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#c62828] px-5 py-3 font-semibold text-white"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
