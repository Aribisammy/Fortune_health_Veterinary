const faqs = [
  {
    question: "How do I request an appointment?",
    answer:
      "Use the appointment page or contact Fortune Health through WhatsApp or phone. Your request is reviewed and the appointment time is confirmed by the business.",
  },
  {
    question: "Do you provide care for farm animals?",
    answer:
      "Fortune Health provides veterinary support for farm animals and poultry. Contact us with the species and nature of your concern so we can guide you on the next step.",
  },
  {
    question: "Can I contact Fortune Health before bringing my animal?",
    answer:
      "Yes. You can contact us by WhatsApp or phone to explain the situation and ask about the appropriate next step before visiting.",
  },
  {
    question: "Do you sell pet food and accessories?",
    answer:
      "Yes. Fortune Health also provides pet food and accessories. Availability can change, so WhatsApp is the easiest way to ask about a particular item.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-[#f5f8f6] py-20">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#c62828]">
            Frequently asked questions
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#17201d] sm:text-4xl">
            Simple answers before you reach out.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-[#dfe8e4] bg-white p-5"
            >
              <summary className="cursor-pointer list-none pr-6 font-[var(--font-poppins)] font-semibold text-[#17201d]">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-6 text-[#5f6b67]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
