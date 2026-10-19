import { areasServed, courses, founderInfo, images, site, type Faq, type HomeCareService } from "./content";
import { getContent, htmlLang, type Lang } from "./i18n";
import { absUrl, stripConfirm } from "./utils";

type Json = Record<string, unknown>;

const bizId = `${site.url}/#business`;
const academyId = `${site.url}/#academy`;
const websiteId = `${site.url}/#website`;
const founderId = `${site.url}/about#founder`;

const address = {
  "@type": "PostalAddress",
  streetAddress: site.address.line1,
  addressLocality: site.address.locality,
  addressRegion: site.address.region,
  postalCode: site.address.postalCode,
  addressCountry: site.address.country,
};

const areaServed = [
  ...areasServed
    .filter((a) => !a.startsWith("Chennai"))
    .map((name) => ({ "@type": "Place", name: `${name}, Chennai` })),
  { "@type": "City", name: "Chennai" },
];

const logo = {
  "@type": "ImageObject",
  url: absUrl(images.logoSquare.src),
  width: images.logoSquare.w,
  height: images.logoSquare.h,
};

const common = {
  url: site.url,
  logo,
  image: [absUrl(images.founderPortrait.src), absUrl(images.logoSquare.src)],
  telephone: site.phoneTel,
  email: site.email,
  address,
  ...(site.geo ? { geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng } } : {}),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: site.hours.schema.days,
    opens: site.hours.schema.opens,
    closes: site.hours.schema.closes,
  },
  areaServed,
  sameAs: [site.facebook, site.mapsUrl],
  founder: { "@id": founderId },
  knowsLanguage: ["ta", "en"],
};

/** Sitewide knowledge graph: WebSite + MedicalBusiness + EducationalOrganization (with offer catalogue). */
export function sitewideSchema(lang: Lang): Json {
  const c = getContent(lang);
  const catalogue = [
    ...Object.values(c.courses).map((k) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: k.full, url: absUrl(k.href, lang) } })),
    ...c.homeCare.services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.h1, url: absUrl(s.href, lang) } })),
  ];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: site.url,
        name: site.name,
        alternateName: [site.shortName, site.homeCareName, site.academyName],
        inLanguage: ["en-IN", "ta-IN"],
        publisher: { "@id": bizId },
      },
      {
        "@type": "MedicalBusiness",
        "@id": bizId,
        name: site.name,
        alternateName: site.homeCareName,
        description: stripConfirm(c.seo["/"].answer ?? c.seo["/"].description),
        slogan: c.site.tagline,
        priceRange: "₹",
        medicalSpecialty: "Endocrinology",
        knowsAbout: [
          "Point-of-care testing",
          "Diabetes care",
          "Blood sugar monitoring",
          "Home nursing",
          "Physiotherapy",
          "Diabetic diet",
          "Medical laboratory technology",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: site.phoneTel,
            contactType: "customer service",
            areaServed: "IN",
            availableLanguage: ["Tamil", "English"],
          },
        ],
        hasOfferCatalog: { "@type": "OfferCatalog", name: `${site.name} – courses and home care services`, itemListElement: catalogue },
        ...common,
      },
      {
        "@type": "EducationalOrganization",
        "@id": academyId,
        name: site.academyName,
        parentOrganization: { "@id": bizId },
        description: stripConfirm(c.seo["/academy"].answer ?? c.seo["/academy"].description),
        ...common,
      },
    ],
  };
}

/** WebPage / AboutPage / ContactPage with answer-first summary exposed as speakable (AEO). */
export function pageSchema(
  lang: Lang,
  path: string,
  opts: { type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage"; name: string; description: string; mainEntity?: string },
): Json {
  const url = absUrl(path, lang);
  return {
    "@context": "https://schema.org",
    "@type": opts.type ?? "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: stripConfirm(opts.name),
    description: stripConfirm(opts.description),
    inLanguage: htmlLang[lang],
    isPartOf: { "@id": websiteId },
    about: { "@id": bizId },
    primaryImageOfPage: { "@type": "ImageObject", url: absUrl(images.founderPortrait.src) },
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["[data-speakable]", "h1"] },
    ...(opts.mainEntity ? { mainEntity: { "@id": opts.mainEntity } } : {}),
  };
}

export function personSchema(lang: Lang): Json {
  const c = getContent(lang);
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": founderId,
    name: founderInfo.name,
    jobTitle: "Founder, BSB Health Care – Chennai; retired Medical Laboratory Technician",
    description: stripConfirm(c.seo["/about"].answer ?? c.seo["/about"].description),
    image: absUrl(images.founderPortrait.src),
    url: absUrl("/about", lang),
    worksFor: { "@id": bizId },
    hasOccupation: { "@type": "Occupation", name: "Medical Laboratory Technician" },
    knowsAbout: ["Medical laboratory technology", "Point-of-care testing", "Diabetes care", "Health education in Tamil"],
    memberOf: { "@type": "Organization", name: "Lions Club of Royal Ullagaram, District 324J" },
    sameAs: [site.facebook],
  };
}

export function breadcrumbSchema(items: { name: string; path: string; lang: Lang }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absUrl(it.path, it.lang),
    })),
  };
}

export function faqSchema(faqs: Faq[], lang: Lang): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: htmlLang[lang],
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: stripConfirm(f.q),
      acceptedAnswer: { "@type": "Answer", text: stripConfirm(f.a) },
    })),
  };
}

/** HowTo – booking / admission steps (helps answer engines give step-by-step replies). */
export function howToSchema(lang: Lang, name: string, description: string, steps: { title: string; text: string }[], path: string): Json {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: stripConfirm(name),
    description: stripConfirm(description),
    inLanguage: htmlLang[lang],
    url: absUrl(path, lang),
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: stripConfirm(s.title), text: stripConfirm(s.text) })),
  };
}

export function courseSchema(lang: Lang, key: keyof typeof courses, description: string, withOffer: boolean): Json {
  const c = getContent(lang).courses[key];
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: c.full,
    description: stripConfirm(description),
    url: absUrl(c.href, lang),
    inLanguage: "ta",
    provider: { "@type": "EducationalOrganization", "@id": academyId, name: site.academyName, url: site.url },
    educationalCredentialAwarded: "Certificate of completion",
    ...(withOffer
      ? {
          offers: {
            "@type": "Offer",
            price: courses[key].feeNumber,
            priceCurrency: "INR",
            category: "Paid",
            url: absUrl(c.href, lang),
          },
        }
      : {}),
  };
}

export function serviceSchema(lang: Lang, s: HomeCareService): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.h1,
    serviceType: s.schemaType,
    description: stripConfirm(s.intro),
    url: absUrl(s.href, lang),
    inLanguage: htmlLang[lang],
    provider: { "@type": "MedicalBusiness", "@id": bizId, name: site.name, telephone: site.phoneTel, url: site.url },
    areaServed,
  };
}
