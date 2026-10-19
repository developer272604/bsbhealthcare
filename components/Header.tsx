import Image from "next/image";
import Link from "next/link";
import { images, site } from "@/lib/content";
import { getContent, lp, type Lang } from "@/lib/i18n";
import { telHref } from "@/lib/utils";
import { Icon } from "./Icon";
import { LangSwitch } from "./LangSwitch";
import { MobileMenu } from "./MobileMenu";

/** Sticky navy header (the gold/white logo is designed for dark backgrounds), nav with dropdowns, language switch and Call button. */
export function Header({ lang }: { lang: Lang }) {
  const { nav, ui } = getContent(lang);
  return (
    <header id="site-header" className="sticky top-0 z-40 border-b border-white/10 bg-navy text-white transition-shadow duration-300">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-3 sm:gap-3 sm:px-6">
        <Link href={lp(lang, "/")} className="flex min-h-11 shrink-0 items-center" aria-label={`${site.name} – ${ui.home}`}>
          <Image
            src={images.logo.src}
            alt=""
            width={images.logo.w}
            height={images.logo.h}
            loading="eager"
            sizes="130px"
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <nav aria-label={ui.mainNav} className="hidden items-center gap-0.5 lg:flex">
          {nav.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={lp(lang, item.href)}
                  className="inline-flex min-h-11 items-center gap-1 whitespace-nowrap rounded-lg px-2.5 text-sm font-semibold text-white/95 hover:bg-white/10 xl:px-3"
                >
                  {item.label}
                  <Icon name="chevron" className="h-4 w-4" />
                </Link>
                <div className="invisible absolute left-0 top-full min-w-64 translate-y-1 rounded-xl border border-navy/10 bg-white p-2 text-ink opacity-0 shadow-card transition duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((c) => (
                    <Link key={c.href} href={lp(lang, c.href)} className="block rounded-lg px-3 py-2.5 text-sm hover:bg-mint">
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={lp(lang, item.href)}
                className="inline-flex min-h-11 items-center whitespace-nowrap rounded-lg px-2.5 text-sm font-semibold text-white/95 hover:bg-white/10 xl:px-3"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <LangSwitch lang={lang} ariaLabel={ui.language} />
          <a
            href={telHref}
            data-track="click_call"
            data-track-location="header"
            className="inline-flex h-11 min-w-11 items-center justify-center gap-2 rounded-full bg-brand-red px-3 text-sm font-bold text-white hover:bg-brand-red-dark sm:px-4"
            aria-label={`${ui.call} ${site.phoneDisplay}`}
          >
            <Icon name="phone" className="h-5 w-5" />
            <span className="hidden whitespace-nowrap min-[1400px]:inline">{site.phoneDisplay}</span>
          </a>
          <MobileMenu lang={lang} items={nav} labels={{ open: ui.menuOpen, close: ui.menuClose, mobileNav: ui.mobileNav }} />
        </div>
      </div>
    </header>
  );
}
