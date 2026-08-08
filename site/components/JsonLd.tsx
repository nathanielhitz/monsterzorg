import { contact, ervaring, isIngevuld, persoon, site } from "@/content";

/**
 * Schema.org-markup voor Google: een Person voor Jarno en een
 * ProfessionalService voor Monster Zorg. Velden die nog een placeholder zijn
 * laten we bewust weg, want onjuiste gegevens in structured data schaden meer
 * dan ze opleveren.
 */
export default function JsonLd() {
  const opleiding = ervaring.items.find((item) => item.soort === "opleiding");

  const persoonSchema: Record<string, unknown> = {
    "@type": "Person",
    "@id": `${site.url}/#jarno`,
    name: persoon.naam,
    jobTitle: persoon.rol,
    url: site.url,
    image: `${site.url}${persoon.foto}`,
    sameAs: [contact.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: persoon.woonplaats,
      addressCountry: "NL",
    },
    knowsLanguage: ["nl", "en", "fr"],
  };

  if (opleiding) {
    persoonSchema.alumniOf = {
      "@type": "EducationalOrganization",
      name: opleiding.organisatie,
    };
    persoonSchema.hasCredential = {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Bachelor",
      name: opleiding.rol,
    };
  }

  if (isIngevuld(contact.email)) persoonSchema.email = contact.email;
  if (isIngevuld(contact.telefoon)) persoonSchema.telephone = contact.telefoon;

  const dienstSchema: Record<string, unknown> = {
    "@type": "ProfessionalService",
    "@id": `${site.url}/#monsterzorg`,
    name: site.naam,
    description: site.description,
    url: site.url,
    image: `${site.url}${persoon.foto}`,
    founder: { "@id": `${site.url}/#jarno` },
    employee: { "@id": `${site.url}/#jarno` },
    priceRange: "Op aanvraag",
    address: {
      "@type": "PostalAddress",
      addressLocality: persoon.woonplaats,
      addressCountry: "NL",
    },
  };

  if (isIngevuld(contact.email)) dienstSchema.email = contact.email;
  if (isIngevuld(contact.telefoon)) dienstSchema.telephone = contact.telefoon;
  if (isIngevuld(contact.kvk)) dienstSchema.identifier = contact.kvk;
  if (isIngevuld(contact.werkgebied)) {
    dienstSchema.areaServed = {
      "@type": "Place",
      name: contact.werkgebied,
    };
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": [persoonSchema, dienstSchema],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
