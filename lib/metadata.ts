import type { Metadata } from "next";
import { site } from "./content";
import { getContent, htmlLang, LANGS, ogLocale, type Lang } from "./i18n";
import { absUrl, stripConfirm } from "./utils";

/** hreflang map for a page path: en-IN, ta-IN and x-default (English). */
export function languageAlternates(path: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const l of LANGS) out[htmlLang[l]] = absUrl(path, l);
  out["x-default"] = absUrl(path, "en");
  return out;
}

/** Full Metadata (title, description, keywords, canonical, hreflang, OG, Twitter, robots, geo) for a page path. */
export function pageMetadata(path: string, lang: Lang): Metadata {
  const c = getContent(lang);
  const entry = c.seo[path];
  if (!entry) throw new Error(`No SEO entry for ${path} (${lang}) in lib/content*.ts`);
  const url = absUrl(path, lang);
  const ogImage = `${site.url}/og/${entry.og}`;
  const other = lang === "ta" ? "en" : "ta";

  return {
    title: { absolute: entry.title },
    description: entry.description,
    keywords: entry.keywords,
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      locale: ogLocale[lang],
      alternateLocale: [ogLocale[other]],
      title: entry.title,
      description: entry.description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: entry.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.description,
      images: [ogImage],
    },
    other: {
      // Local-SEO geo meta (Bing / some directories still read these)
      "geo.region": "IN-TN",
      "geo.placename": "Chennai",
      ...(site.geo ? { "geo.position": `${site.geo.lat};${site.geo.lng}`, ICBM: `${site.geo.lat}, ${site.geo.lng}` } : {}),
      "content-language": htmlLang[lang],
      ...(entry.answer ? { "ai-summary": stripConfirm(entry.answer) } : {}),
    },
  };
}

/** Site-wide metadata for each language root layout. */
export function rootMetadata(lang: Lang): Metadata {
  const verification: NonNullable<Metadata["verification"]> = {};
  if (process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION) verification.google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  if (process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION) verification.other = { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION };

  return {
    metadataBase: new URL(site.url),
    applicationName: site.name,
    authors: [{ name: "M.R. Balachandran", url: absUrl("/about", lang) }],
    creator: site.name,
    publisher: site.name,
    category: "health",
    generator: undefined,
    referrer: "strict-origin-when-cross-origin",
    formatDetection: { telephone: false, email: false, address: false },
    manifest: "/manifest.webmanifest",
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    },
    verification,
    alternates: { types: { "text/markdown": [{ url: "/llms.txt", title: "llms.txt – site summary for AI assistants" }] } },
    appleWebApp: { capable: true, title: site.shortName, statusBarStyle: "black-translucent" },
    other: { "format-detection": "telephone=no", "content-language": htmlLang[lang] },
  };
}
