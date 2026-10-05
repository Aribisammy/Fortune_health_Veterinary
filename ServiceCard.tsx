import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article className="group rounded-3xl border border-[#e3eae7] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#cbdad4] hover:shadow-[0_18px_45px_rgba(23,32,29,0.08)]">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#fceaea] text-[#c62828]">
        <Icon size={24} />
      </div>

      <h3 className="mt-6 font-[var(--font-poppins)] text-xl font-bold text-[#17201d]">
        {service.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-[#5f6b67]">
        {service.description}
      </p>

      <Link
        href="/services"
        className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#176b57]"
      >
        Learn more
        <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </article>
  );
}
