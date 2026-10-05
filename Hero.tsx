import Link from "next/link";
import { ArrowRight, HeartPulse, PawPrint, ShieldCheck, Stethoscope } from "lucide-react";
import { business } from "@/data/business";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#f5f8f6]">
      <div className="container-page grid min-h-[640px] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d7e4df] bg-white px-4 py-2 text-sm font-semibold text-[#176b57]">
            <ShieldCheck size={17} />
            Professional animal healthcare in Ibadan
          </div>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[#17201d] sm:text-5xl lg:text-6xl">
            Professional care for healthier animals.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f6b67]">
            Veterinary care, preventive health support, and practical animal-care
            solutions for pets, livestock and poultry.
          </p>

          <p className="mt-4 max-w-xl text-sm font-medium leading-6 text-[#176b57]">
            {business.tagline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c62828] px-6 py-3.5 font-semibold text-white transition hover:bg-[#a61f1f]"
            >
              Request an Appointment
              <ArrowRight size={18} />
            </Link>
            <a
              href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
                "Hello Fortune Health, I would like to make a veterinary enquiry."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c8d7d1] bg-white px-6 py-3.5 font-semibold text-[#176b57] transition hover:border-[#176b57]"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#5f6b67]">
            <span className="inline-flex items-center gap-2">
              <Stethoscope size={17} className="text-[#c62828]" />
              Professional care
            </span>
            <span className="inline-flex items-center gap-2">
              <HeartPulse size={17} className="text-[#c62828]" />
              Preventive approach
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#dce8e3] bg-white p-7 shadow-[0_24px_70px_rgba(23,32,29,0.10)]">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#c62828]/10" />
            <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-[#176b57]/10" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#f5f8f6] px-3 py-1 text-xs font-bold text-[#176b57]">
                  FORTUNE HEALTH
                </span>
                <PawPrint className="text-[#c62828]" size={28} />
              </div>

              <div className="my-10 flex justify-center">
                <div className="grid h-52 w-52 place-items-center rounded-full bg-[#176b57] shadow-xl">
                  <div className="grid h-36 w-36 place-items-center rounded-full bg-white">
                    <HeartPulse size={72} className="text-[#c62828]" strokeWidth={1.7} />
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-[#f5f8f6] p-5">
                <p className="font-[var(--font-poppins)] text-xl font-bold text-[#17201d]">
                  Healthy animals. Better care.
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5f6b67]">
                  Your animal&apos;s health deserves professional attention and
                  practical preventive care.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white p-4 shadow-lg sm:block">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-[#fceaea]">
                <PawPrint size={22} className="text-[#c62828]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#5f6b67]">Care starts</p>
                <p className="font-bold text-[#17201d]">with prevention</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
