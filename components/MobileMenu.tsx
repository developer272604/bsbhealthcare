"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { lp, type Lang } from "@/lib/lang-path";
import { Icon } from "./Icon";

type Item = { label: string; href: string; children?: { label: string; href: string }[] };

/** Hamburger menu for screens below `lg`. Closes on navigation and on Escape. */
export function MobileMenu({
  lang,
  items,
  labels,
}: {
  lang: Lang;
  items: Item[];
  labels: { open: string; close: string; mobileNav: string };
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? labels.close : labels.open}
        className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-white hover:bg-white/10"
      >
        <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
      </button>
      {open && (
        <nav
          id="mobile-nav"
          aria-label={labels.mobileNav}
          className="absolute inset-x-0 top-16 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-white/10 bg-navy-800 px-4 pb-6 pt-2 text-white shadow-card"
        >
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.href}>
                <Link href={lp(lang, item.href)} className="flex min-h-11 items-center rounded-lg px-3 font-bold hover:bg-white/10">
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mb-2 ml-3 border-l-2 border-gold/60 pl-3">
                    {item.children.slice(1).map((c) => (
                      <li key={c.href}>
                        <Link href={lp(lang, c.href)} className="flex min-h-11 items-center rounded-lg px-3 text-sm text-white/90 hover:bg-white/10">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
