import { siteConfig } from "@/lib/utils";

export function OrgJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    email: siteConfig.email,
    areaServed: "MX",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Durango",
      addressCountry: "MX",
    },
    sameAs: Object.values(siteConfig.social),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
