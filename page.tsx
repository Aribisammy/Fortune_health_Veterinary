import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

const groups = [
  {
    title: "Small Animal Care",
    text: "Veterinary support for dogs, cats and other companion animals, including consultation, preventive care and clinical attention.",
  },
  {
    title: "Preventive Healthcare",
    text: "Vaccination, parasite control and other practical measures aimed at maintaining animal health and reducing preventable problems.",
  },
  {
    title: "Clinical Veterinary Care",
    text: "Professional assessment and treatment support when an animal is showing signs of illness or injury.",
  },
  {
    title: "Reproductive Services",
    text: "Breeding and reproductive support, including appropriate assessment when reproductive concerns arise.",
  },
  {
    title: "Farm Animal Healthcare",
    text: "Practical veterinary support for livestock and poultry owners managing animal health on farms.",
  },
  {
    title: "Ambulatory Veterinary Support",
    text: "Where applicable, veterinary support can be discussed for situations where visiting an animal at its location is more practical.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-[#f5f8f6] py-20">
          <div className="container-page max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#c62828]">
              Veterinary services
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#17201d] sm:text-5xl">
              Practical veterinary support for animals and their owners.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5f6b67]">
              From routine preventive care to clinical concerns and farm-animal
              healthcare, contact us to discuss the appropriate service for your
              animal.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </section>

        <section className="bg-[#f5f8f6] py-20">
          <div className="container-page">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#176b57]">
                Our care areas
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#17201d] sm:text-4xl">
                Healthcare support across different animal needs.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {groups.map((group) => (
                <article key={group.title} className="rounded-3xl bg-white p-7">
                  <h3 className="font-[var(--font-poppins)] text-xl font-bold text-[#17201d]">
                    {group.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#5f6b67]">{group.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-page rounded-[2rem] bg-[#17201d] px-7 py-12 text-white sm:px-12">
            <h2 className="text-3xl font-extrabold">Not sure which service you need?</h2>
            <p className="mt-3 max-w-2xl leading-7 text-white/70">
              Tell us what is happening, the type of animal involved and any
              important information you already have. We can help you determine
              the appropriate next step.
            </p>
            <Link
              href="/appointment"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#c62828] px-6 py-3.5 font-semibold text-white hover:bg-[#a61f1f]"
            >
              Contact / Request Appointment
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
