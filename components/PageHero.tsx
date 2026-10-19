import type { Lang } from "@/lib/i18n";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { Ta, Txt } from "./Txt";

/** Hero band for inner pages: breadcrumbs, Tamil line, the single H1, optional intro and CTAs. */
export function PageHero({
  lang,
  trail,
  h1,
  ta,
  intro,
  highlight,
  children,
}: {
  lang: Lang;
  trail: Crumb[];
  h1: string;
  ta?: string;
  intro?: string;
  highlight?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden bg-navy text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/10" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 right-1/4 h-56 w-56 rounded-full bg-white/5" />
      <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-12">
        <Breadcrumbs lang={lang} trail={trail} light />
        <div className="mt-5 max-w-3xl">
          {ta && (
            <Ta as="p" className="mb-2 text-lg font-bold text-gold md:text-2xl">
              {ta}
            </Ta>
          )}
          <h1 className="text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">{h1}</h1>
          {intro && (
            <p className="mt-4 text-base text-white/90 md:text-lg">
              <Txt highlight={highlight}>{intro}</Txt>
            </p>
          )}
          {children && <div className="mt-6 flex flex-col gap-3 sm:flex-row">{children}</div>}
        </div>
      </div>
    </div>
  );
}
