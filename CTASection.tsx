import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16">
      <div className="container-page overflow-hidden rounded-[2rem] bg-[#176b57] px-7 py-12 text-white sm:px-12 sm:py-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b9e0d4]">
              Your animal deserves good care
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Have a concern about your animal?
            </h2>
            <p className="mt-4 leading-7 text-white/80">
              Reach out to Fortune Health and let&apos;s determine the appropriate
              next step for your animal.
            </p>
          </div>

          <Link
            href="/appointment"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-[#176b57] hover:bg-[#f5f8f6]"
          >
            Request an Appointment
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
