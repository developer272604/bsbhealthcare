import { site, waMessages } from "./content";
import { lp, type Lang } from "./i18n";

export const telHref = `tel:${site.phoneTel}`;

/** Build a wa.me link with a pre-filled message. */
export function waLink(message: string = waMessages.general): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Absolute URL for a page path in a language ("/" for English home, "/ta" for Tamil home). */
export function absUrl(path: string, lang: Lang = "en"): string {
  const p = lp(lang, path);
  return `${site.url}${p === "/" ? "" : p}`;
}

/** Remove "[CONFIRM: …]" markers – used for JSON-LD / metadata / llms.txt so unverified notes never leave the site. */
export function stripConfirm(text: string): string {
  return text.replace(/\s*\[CONFIRM:[^\]]*\]/g, "").trim();
}

export { cn } from "./cn";

export function fullAddress(): string {
  const a = site.address;
  return `${a.line1}, ${a.locality}, ${a.city} – ${a.postalCode}`;
}
