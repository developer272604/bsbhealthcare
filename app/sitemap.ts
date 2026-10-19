import type { MetadataRoute } from "next";
import { images, seo } from "@/lib/content";
import { htmlLang, LANGS } from "@/lib/i18n";
import { absUrl } from "@/lib/utils";

const BUILD_DATE = new Date();

/** Every page in English and Tamil, each with hreflang alternates (en-IN, ta-IN, x-default) and its key image. */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const path of Object.keys(seo)) {
    const isLegal = path.startsWith("/privacy") || path === "/terms" || path === "/refund-policy";
    const languages: Record<string, string> = { "x-default": absUrl(path, "en") };
    for (const l of LANGS) languages[htmlLang[l]] = absUrl(path, l);
    for (const lang of LANGS) {
      entries.push({
        url: absUrl(path, lang),
        lastModified: BUILD_DATE,
        changeFrequency: path === "/" ? "weekly" : isLegal ? "yearly" : "monthly",
        priority: path === "/" ? (lang === "en" ? 1 : 0.9) : isLegal ? 0.3 : path.split("/").length <= 2 ? 0.8 : 0.7,
        alternates: { languages },
        images: path === "/" || path === "/about" ? [absUrl(images.founderPortrait.src)] : undefined,
      });
    }
  }
  return entries;
}
