import Link from "next/link";
import { ApplyButton, CallButton } from "@/components/ActionLinks";
import { Section } from "@/components/Section";
import { getContent, lp, type Lang } from "@/lib/i18n";

export function NotFoundView({ lang }: { lang: Lang }) {
  const { ui } = getContent(lang);
  return (
    <Section>
      <div className="mx-auto max-w-xl py-10 text-center">
        <p className="text-6xl font-extrabold text-brand-red">404</p>
        <h1 className="mt-2 text-3xl font-extrabold text-navy">{ui.notFoundTitle}</h1>
        <p className="mt-3 text-muted">{ui.notFoundText}</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href={lp(lang, "/")} className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-navy px-5 font-semibold text-navy">
            {ui.goHome}
          </Link>
          <ApplyButton lang={lang} />
          <CallButton lang={lang} />
        </div>
      </div>
    </Section>
  );
}
