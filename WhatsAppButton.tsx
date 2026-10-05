import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  const url = buildWhatsAppUrl(
    "Hello Fortune Health Veterinary Services, I would like to make an enquiry about veterinary care."
  );

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Fortune Health Veterinary Services on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
    >
      <MessageCircle size={20} aria-hidden="true" />
      WhatsApp Us
    </a>
  );
}
