import Link from "next/link";
import { business } from "@/data/business";

export default function Footer() {
  return (
    <footer className="bg-[#17201d] py-14 text-white">
      <div className="container-page grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-[var(--font-poppins)] text-xl font-bold">
            Fortune Health
          </p>
          <p className="mt-1 text-sm font-semibold text-[#9fd0c1]">
            Veterinary Services
          </p>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/70">
            {business.tagline}
          </p>
        </div>

        <div>
          <p className="font-semibold">Quick links</p>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            <Link href="/about" className="hover:text-white">About Us</Link>
            <Link href="/services" className="hover:text-white">Veterinary Services</Link>
            <Link href="/products" className="hover:text-white">Pet Food & Accessories</Link>
            <Link href="/appointment" className="hover:text-white">Appointment</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>

        <div>
          <p className="font-semibold">Contact</p>
          <p className="mt-4 text-sm leading-6 text-white/70">{business.address}</p>
          <a
            href={`tel:+${business.whatsappNumber}`}
            className="mt-4 inline-block text-sm font-semibold text-white hover:underline"
          >
            {business.phone}
          </a>
        </div>
      </div>

      <div className="container-page mt-12 border-t border-white/10 pt-6 text-xs text-white/50">
        © {new Date().getFullYear()} Fortune Health Veterinary Services. All rights reserved.
      </div>
    </footer>
  );
}
