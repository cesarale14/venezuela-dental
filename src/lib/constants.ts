export const CONTACT = {
  phones: [
    { number: "+58 424-187-4488", whatsapp: true, label: "WhatsApp 1" },
    { number: "+58 412-541-1580", whatsapp: true, label: "WhatsApp 2" },
  ],
  email: "lepageslc@gmail.com",
  address: {
    full: "Esquina Peligro Alcabala, Torre Profesional Alcabala, Mezzanina, Oficina 2, La Candelaria, Caracas, Venezuela",
    short: "Torre Profesional Alcabala, La Candelaria, Caracas",
    googleMapsUrl:
      "https://www.google.com/maps?q=10.503787994384766,-66.90425872802734&z=17&hl=en",
    lat: 10.503787994384766,
    lng: -66.90425872802734,
  },
  whatsappLink1: "https://wa.me/584241874488",
  whatsappLink2: "https://wa.me/584125411580",
  businessName: "Venezuela Dental",
};

export function getWhatsAppUrl(productName?: string): string {
  const baseUrl = "https://wa.me/584241874488";
  const defaultMessage =
    "Hola, estoy interesado en sus productos odontol\u00f3gicos.";
  const productMessage = productName
    ? `Hola, estoy interesado en "${productName}". \u00bfPodr\u00edan darme informaci\u00f3n sobre disponibilidad y precio?`
    : defaultMessage;
  return `${baseUrl}?text=${encodeURIComponent(productMessage)}`;
}
