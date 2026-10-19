import type { Faq } from "@/lib/content";
import type { Lang } from "@/lib/i18n";
import { faqSchema } from "@/lib/schema";
import { Icon } from "./Icon";
import { JsonLd } from "./JsonLd";
import { Section, SectionHeading } from "./Section";
import { Txt } from "./Txt";

/** FAQ accordion built on native <details> (no JS) + FAQPage JSON-LD. */
export function FaqAccordion({ faqs, lang }: { faqs: Faq[]; lang: Lang }) {
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((f) => (
        <details key={f.q} className="faq rounded-xl border border-navy/10 bg-white shadow-card">
          <summary className="flex min-h-12 cursor-pointer items-center justify-between gap-4 px-5 py-3 text-left font-semibold text-navy">
            <span>
              <Txt>{f.q}</Txt>
            </span>
            <Icon name="chevron" className="faq-chevron h-5 w-5 shrink-0 transition-transform duration-300" />
          </summary>
          <p className="px-5 pb-4 text-muted">
            <Txt>{f.a}</Txt>
          </p>
        </details>
      ))}
      <JsonLd data={faqSchema(faqs, lang)} />
    </div>
  );
}

export function FaqSection({
  faqs,
  title,
  ta,
  bg = "white",
  lang,
}: {
  faqs: Faq[];
  title: string;
  ta?: string;
  bg?: "white" | "mint";
  lang: Lang;
}) {
  return (
    <Section id="faq" bg={bg}>
      <SectionHeading title={title} ta={ta} align="center" />
      <FaqAccordion faqs={faqs} lang={lang} />
    </Section>
  );
}
