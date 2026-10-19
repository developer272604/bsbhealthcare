"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { lp, stripLang, type Lang } from "@/lib/lang-path";

/**
 * English | தமிழ் switch. Links to the same page in the other language
 * (the whole site – every page, heading, button and form label – exists in both).
 */
export function LangSwitch({ lang, ariaLabel, className = "" }: { lang: Lang; ariaLabel: string; className?: string }) {
  const pathname = usePathname() ?? "/";
  const base = stripLang(pathname);
  const items: { code: Lang; label: string; text: string }[] = [
    { code: "en", label: "EN – English", text: "EN" },
    { code: "ta", label: "தமிழ்", text: "தமிழ்" },
  ];
  return (
    <div role="group" aria-label={ariaLabel} className={`inline-flex rounded-full border border-white/30 bg-white/5 p-0.5 text-sm font-bold ${className}`}>
      {items.map((it) => {
        const active = it.code === lang;
        return (
          <Link
            key={it.code}
            href={lp(it.code, base)}
            hrefLang={it.code === "ta" ? "ta-IN" : "en-IN"}
            lang={it.code}
            aria-current={active ? "true" : undefined}
            aria-label={it.label}
            scroll={false}
            prefetch={false}
            className={`inline-flex min-h-9 min-w-10 items-center justify-center rounded-full px-3 transition-colors ${
              active ? "bg-gold text-navy" : "text-white hover:bg-white/15"
            }`}
          >
            {it.text}
          </Link>
        );
      })}
    </div>
  );
}
