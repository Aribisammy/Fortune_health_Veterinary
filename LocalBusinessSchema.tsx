import { businessAddress, defaultDescription, siteName, siteUrl } from "@/data/seo";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    name: siteName,
    description: defaultDescription,
    url: siteUrl,
    telephone: "+2347033330262",
    address: {
      "@type": "PostalAddress",
      ...businessAddress,
    },
    areaServed: [
      "Mokola",
      "Ibadan",
      "Oyo State",
      "Nigeria",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
