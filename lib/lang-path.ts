// Pure path helpers (no content imports) – safe to use in client components.
export type Lang = "en" | "ta";

/** "/academy" → "/ta/academy" for Tamil, unchanged for English. Handles "#hash" suffixes. */
export function lp(lang: Lang, path: string): string {
  if (lang === "en") return path;
  if (path === "/") return "/ta";
  return `/ta${path}`;
}

/** Strip the language prefix: "/ta/academy" → "/academy". */
export function stripLang(pathname: string): string {
  if (pathname === "/ta") return "/";
  return pathname.startsWith("/ta/") ? pathname.slice(3) : pathname;
}
