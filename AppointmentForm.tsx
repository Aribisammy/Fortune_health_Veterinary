"use client";

import { FormEvent, useState } from "react";
import { buildAppointmentWhatsAppMessage, buildWhatsAppUrl } from "@/lib/whatsapp";

type FormData = {
  name: string;
  phone: string;
  species: string;
  petName: string;
  reason: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
};

const initialData: FormData = {
  name: "",
  phone: "",
  species: "",
  petName: "",
  reason: "",
  preferredDate: "",
  preferredTime: "",
  notes: "",
};

export default function AppointmentForm() {
  const [data, setData] = useState<FormData>(initialData);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function update(field: keyof FormData, value: string) {
    setData((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to submit your request.");
      }

      setStatus("success");
      setMessage(result.message);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    const whatsappMessage = buildAppointmentWhatsAppMessage(data);
    const whatsappUrl = buildWhatsAppUrl(whatsappMessage);

    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-6" role="status">
        <h2 className="text-xl font-semibold text-green-900">
          Appointment request received
        </h2>
        <p className="mt-2 text-green-800">{message}</p>
        <p className="mt-3 text-sm text-green-800">
          You can also send the same request directly to Fortune Health on WhatsApp.
          This opens WhatsApp with your details filled in; you will still need to tap
          Send.
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-5 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Send via WhatsApp
          </a>

          <button
            type="button"
            onClick={() => {
              setData(initialData);
              setStatus("idle");
              setMessage("");
            }}
            className="rounded-xl border border-green-700 px-5 py-3 font-semibold text-green-800 transition hover:bg-white"
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block font-medium">Your name *</label>
          <input id="name" name="name" required minLength={2} value={data.name}
            onChange={(e) => update("name", e.target.value)}
            className="w-full rounded-xl border px-4 py-3" />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block font-medium">Phone / WhatsApp *</label>
          <input id="phone" name="phone" required minLength={7} value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="w-full rounded-xl border px-4 py-3" />
        </div>

        <div>
          <label htmlFor="species" className="mb-2 block font-medium">Animal species *</label>
          <select id="species" name="species" required value={data.species}
            onChange={(e) => update("species", e.target.value)}
            className="w-full rounded-xl border px-4 py-3">
            <option value="">Select species</option>
            <option>Dog</option>
            <option>Cat</option>
            <option>Goat</option>
            <option>Sheep</option>
            <option>Cattle</option>
            <option>Poultry</option>
            <option>Pig</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="petName" className="mb-2 block font-medium">Animal / pet name</label>
          <input id="petName" name="petName" value={data.petName}
            onChange={(e) => update("petName", e.target.value)}
            className="w-full rounded-xl border px-4 py-3" />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="reason" className="mb-2 block font-medium">Reason for visit *</label>
          <textarea id="reason" name="reason" required minLength={5} rows={4} value={data.reason}
            onChange={(e) => update("reason", e.target.value)}
            placeholder="Briefly tell us what you need help with."
            className="w-full rounded-xl border px-4 py-3" />
        </div>

        <div>
          <label htmlFor="preferredDate" className="mb-2 block font-medium">Preferred date</label>
          <input id="preferredDate" type="date" name="preferredDate" value={data.preferredDate}
            onChange={(e) => update("preferredDate", e.target.value)}
            className="w-full rounded-xl border px-4 py-3" />
        </div>

        <div>
          <label htmlFor="preferredTime" className="mb-2 block font-medium">Preferred time</label>
          <input id="preferredTime" type="time" name="preferredTime" value={data.preferredTime}
            onChange={(e) => update("preferredTime", e.target.value)}
            className="w-full rounded-xl border px-4 py-3" />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="notes" className="mb-2 block font-medium">Additional information</label>
          <textarea id="notes" name="notes" rows={4} value={data.notes}
            onChange={(e) => update("notes", e.target.value)}
            placeholder="Anything else we should know?"
            className="w-full rounded-xl border px-4 py-3" />
        </div>
      </div>

      {status === "error" && (
        <p className="rounded-xl bg-red-50 p-4 text-red-800" role="alert">{message}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-xl bg-[#C62828] px-5 py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending request..." : "Request an Appointment"}
      </button>

      <p className="text-sm text-gray-600">
        Submitting this form sends an appointment request. Your appointment is not
        confirmed until Fortune Health Veterinary Services reviews and confirms the time.
      </p>
    </form>
  );
}
