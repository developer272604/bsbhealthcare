import type { Lang } from "@/lib/i18n";
import { Ta } from "./Txt";
import { ApplyButton, CallButton, WhatsAppButton } from "./ActionLinks";

/** Reusable closing call-to-action band. */
export function CtaBand({
  lang,
  title,
  ta,
  text,
  waMessage,
  applyMessage,
  showApply = false,
  children,
}: {
  lang: Lang;
  title: string;
  ta?: string;
  text?: string;
  waMessage?: string;
  applyMessage?: string;
  showApply?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy py-12 text-white md:py-16" aria-labelledby="cta-title">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-2xl" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        {ta && (
          <Ta as="p" className="mb-1 text-xl font-bold text-gold md:text-2xl">
            {ta}
          </Ta>
        )}
        <h2 id="cta-title" className="text-2xl font-extrabold md:text-4xl">
          {title}
        </h2>
        {text && <p className="mx-auto mt-3 max-w-2xl text-white/85 md:text-lg">{text}</p>}
        <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          {showApply && <ApplyButton lang={lang} size="lg" message={applyMessage} where="cta-band" />}
          <CallButton lang={lang} variant="white" size="lg" where="cta-band" />
          <WhatsAppButton lang={lang} variant="green" size="lg" message={waMessage} where="cta-band" />
        </div>
        {children}
      </div>
    </section>
  );
}
