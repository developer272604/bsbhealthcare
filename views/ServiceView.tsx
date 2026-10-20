import Link from "next/link";
import { CallButton, WhatsAppButton } from "@/components/ActionLinks";
import { Card, CheckList } from "@/components/Card";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { QuickAnswer } from "@/components/QuickAnswer";
import { Section, SectionHeading } from "@/components/Section";
import { Ta, Txt } from "@/components/Txt";
import { getContent, lp, type Lang } from "@/lib/i18n";
import { howToSchema, pageSchema, serviceSchema } from "@/lib/schema";

export function ServiceView({ lang, slug }: { lang: Lang; slug: string }) {
  const c = getContent(lang);
  const { homeCare, areasServed, areasConfirm, ui } = c;
  const s = homeCare.services.find((x) => x.slug === slug);
  if (!s) return null;
  const entry = c.seo[s.href];
  const others = homeCare.services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <PageHero
        lang={lang}
        trail={[
          { name: ui.navHomeCare, path: "/home-care" },
          { name: s.name, path: s.href },
        ]}
        h1={s.h1}
        ta={s.ta}
      >
        <WhatsAppButton lang={lang} size="lg" label={`${ui.book} ${s.name}`} message={s.wa} where={`service-${s.slug}-hero`} />
        <CallButton lang={lang} size="lg" variant="ghost" where={`service-${s.slug}-hero`} />
      </PageHero>
      <QuickAnswer label={ui.inShort} text={entry.answer ?? entry.description} />

      <Section>
        <div className="max-w-4xl">
          <p className="text-lg text-muted md:text-xl">{s.intro}</p>
          <p className="mt-3 text-sm">
            <Txt>{s.confirm}</Txt>
          </p>
        </div>
      </Section>

      <Section bg="mint" id="whats-included">
        <SectionHeading title={`${ui.whatsIncluded}: ${s.name}`} />
        <CheckList items={s.included} className="grid gap-x-10 gap-y-3 md:grid-cols-2" />
      </Section>

      <Section id="how-it-works">
        <SectionHeading title={ui.howItWorks} />
        <ol className="grid gap-4 md:grid-cols-4">
          {s.steps.map((st, i) => (
            <li key={st.title}>
              <Card className="h-full">
                <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-red text-lg font-extrabold text-white">{i + 1}</span>
                <h3 className="font-bold text-navy">{st.title}</h3>
                <p className="mt-1 text-sm text-muted">{st.text}</p>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      <Section bg="mint">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-xl font-extrabold text-navy">{ui.whoIsItFor}</h2>
            <CheckList items={s.whoFor} className="mt-3" />
          </Card>
          <Card id="areas">
            <h2 className="text-xl font-extrabold text-navy">{ui.areasServedChennai}</h2>
            <p className="mt-3 text-muted">{s.areaNote}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {areasServed.map((a) => (
                <li key={a} className="rounded-full bg-mint px-3 py-1 text-sm font-medium text-navy">
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-sm">
              <Txt>{areasConfirm}</Txt>
            </p>
          </Card>
        </div>
        {s.slug === "blood-test-at-home" && (
          <p className="mt-6 text-sm text-muted">
            <Link className="font-semibold text-navy underline" href={lp(lang, "/diabetes-care")}>
              {ui.readDiabetesCare}
            </Link>
          </p>
        )}
      </Section>

      <FaqSection lang={lang} faqs={s.faqs} title={`${s.name} — ${ui.faqSuffix}`} />

      <Section bg="mint">
        <SectionHeading title={ui.otherServices} />
        <ul className="flex flex-wrap gap-3">
          {others.map((o) => (
            <li key={o.slug}>
              <Link
                href={lp(lang, o.href)}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-navy/20 bg-white px-4 font-semibold text-navy transition hover:-translate-y-0.5 hover:border-navy"
              >
                <Icon name={o.icon} className="h-5 w-5 text-brand-green-dark" />
                {o.name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand lang={lang} title={`${ui.book} ${s.name}`} text={ui.serviceCtaText} waMessage={s.wa} />

      <JsonLd data={serviceSchema(lang, s)} />
      <JsonLd data={howToSchema(lang, `${s.name}: ${ui.howItWorks}`, entry.answer ?? entry.description, s.steps, s.href)} />
      <JsonLd data={pageSchema(lang, s.href, { name: entry.title, description: entry.answer ?? entry.description })} />
    </>
  );
}
