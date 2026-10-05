import { MapPin, Phone } from "lucide-react";
import { business } from "@/data/business";

export default function LocationSection() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    business.address
  )}`;

  return (
    <section id="location" className="py-20">
      <div className="container-page grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#c62828]">
            Find us
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#17201d] sm:text-4xl">
            Conveniently located in Mokola, Ibadan.
          </h2>
          <p className="mt-5 leading-7 text-[#5f6b67]">
            When you need veterinary attention or want to enquire about pet-care
            products, contact us first so we can help you take the right next step.
          </p>

          <div className="mt-7 space-y-4">
            <div className="flex gap-3">
              <MapPin className="mt-1 shrink-0 text-[#c62828]" size={21} />
              <p className="text-sm leading-6 text-[#46524e]">{business.address}</p>
            </div>

            <div className="flex gap-3">
              <Phone className="mt-1 shrink-0 text-[#176b57]" size={21} />
              <a
                href={`tel:+${business.whatsappNumber}`}
                className="font-semibold text-[#176b57] hover:underline"
              >
                {business.phone}
              </a>
            </div>
          </div>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex rounded-full bg-[#17201d] px-6 py-3 font-semibold text-white hover:bg-[#176b57]"
          >
            Get Directions
          </a>
        </div>

        <div className="grid min-h-[330px] place-items-center overflow-hidden rounded-[2rem] border border-[#dce7e2] bg-[#f5f8f6]">
          <div className="text-center">
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-white shadow-sm">
              <MapPin size={38} className="text-[#c62828]" />
            </div>
            <p className="mt-5 font-[var(--font-poppins)] text-xl font-bold text-[#17201d]">
              Fortune Health Veterinary Services
            </p>
            <p className="mt-2 max-w-md px-5 text-sm leading-6 text-[#5f6b67]">
              Shop 5, Cele Church Complex, opposite Army Barrack, Jebenwon Road,
              Mokola, Ibadan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
