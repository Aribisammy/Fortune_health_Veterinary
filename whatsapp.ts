const WHATSAPP_NUMBER = "2347033330262";

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildAppointmentWhatsAppMessage(data: {
  name: string;
  phone: string;
  species: string;
  petName?: string;
  reason: string;
  preferredDate?: string;
  preferredTime?: string;
  notes?: string;
}) {
  return [
    "Hello Fortune Health Veterinary Services,",
    "",
    "I would like to request a veterinary appointment.",
    "",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Animal species: ${data.species}`,
    data.petName ? `Pet name: ${data.petName}` : "",
    `Reason for visit: ${data.reason}`,
    data.preferredDate ? `Preferred date: ${data.preferredDate}` : "",
    data.preferredTime ? `Preferred time: ${data.preferredTime}` : "",
    data.notes ? `Additional information: ${data.notes}` : "",
    "",
    "Please review my request and let me know the available/confirmed time.",
  ].filter(Boolean).join("\n");
}

export { WHATSAPP_NUMBER };
