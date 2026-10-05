"use client";

import { FormEvent, useState } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function ContactForm() {
  const [data, setData] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok || !result.success) throw new Error();

      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const whatsappUrl = buildWhatsAppUrl(
    `Hello Fortune Health Veterinary Services,\n\nName: ${data.name}\nPhone: ${data.phone}\n\nEnquiry:\n${data.message}`
  );

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-6" role="status">
        <h2 className="text-xl font-semibold text-green-900">Message received</h2>
        <p className="mt-2 text-green-800">
          Your enquiry has been received. You can also send it directly through WhatsApp.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex rounded-xl bg-[#25D366] px-5 py-3 font-semibold text-white"
        >
          Send via WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="contact-name" className="mb-2 block font-medium">Your name *</label>
        <input id="contact-name" required minLength={2} value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className="w-full rounded-xl border px-4 py-3" />
      </div>
      <div>
        <label htmlFor="contact-phone" className="mb-2 block font-medium">Phone / WhatsApp *</label>
        <input id="contact-phone" required minLength={7} value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          className="w-full rounded-xl border px-4 py-3" />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-2 block font-medium">Your enquiry *</label>
        <textarea id="contact-message" required minLength={5} rows={5} value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
          className="w-full rounded-xl border px-4 py-3" />
      </div>
      {status === "error" && (
        <p className="rounded-xl bg-red-50 p-4 text-red-800" role="alert">
          We could not submit your enquiry. Please try again or use WhatsApp directly.
        </p>
      )}
      <button type="submit" className="w-full rounded-xl bg-[#C62828] px-5 py-3 font-semibold text-white">
        Send Enquiry
      </button>
    </form>
  );
}
