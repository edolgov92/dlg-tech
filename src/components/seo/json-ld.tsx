import { getTranslations } from "next-intl/server";
import { SITE_URL, CONTACT_EMAIL, LINKEDIN_URL } from "@/lib/constants";

function buildOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "DLG Tech",
    legalName: "Evgenii Dolgov PR Novi Sad",
    url: SITE_URL,
    email: CONTACT_EMAIL,
    foundingDate: "2024",
    founder: {
      "@type": "Person",
      name: "Eugene Dolgov",
      jobTitle: "Tech Lead & Software Architect",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Novi Sad",
      addressCountry: "RS",
    },
    sameAs: [LINKEDIN_URL],
  };
}

function buildServiceSchema() {
  return {
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#service`,
    name: "DLG Tech — Software Engineering Services",
    url: SITE_URL,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Continent", name: "Europe" },
    ],
    serviceType: [
      "Custom Software Development",
      "Technical Architecture",
      "Staff Augmentation",
      "Dedicated Development Team",
      "Full-Stack Engineering",
      "DevOps Consulting",
    ],
    description:
      "Architect-founded engineering team providing custom software development, technical architecture, and team extension services for startups and growing companies.",
    priceRange: "$$",
  };
}

function buildWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "DLG Tech",
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };
}

function buildWebPageSchema(title: string, description: string) {
  return {
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: title,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };
}

export async function JsonLd({ locale }: { locale: string }) {
  const tMeta = await getTranslations({ locale, namespace: "metadata" });
  const tFaq = await getTranslations({ locale, namespace: "faq" });

  const faqItems = [
    { q: tFaq("faq1Q"), a: tFaq("faq1A") },
    { q: tFaq("faq2Q"), a: tFaq("faq2A") },
    { q: tFaq("faq3Q"), a: tFaq("faq3A") },
    { q: tFaq("faq4Q"), a: tFaq("faq4A") },
    { q: tFaq("faq6Q"), a: tFaq("faq6A") },
    { q: tFaq("faq7Q"), a: tFaq("faq7A") },
    { q: tFaq("faq8Q"), a: tFaq("faq8A") },
    { q: tFaq("faq9Q"), a: tFaq("faq9A") },
  ];

  const faqSchema = {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: faqItems.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationSchema(),
      buildWebSiteSchema(),
      buildWebPageSchema(tMeta("title"), tMeta("description")),
      buildServiceSchema(),
      faqSchema,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
