import Link from "next/link";
import { btnClass, CallButton, WhatsAppButton } from "@/components/ActionLinks";
import { Card, CheckList } from "@/components/Card";
import { CtaBand } from "@/components/CtaBand";
import { HomeCareCards } from "@/components/HomeSections";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { QuickAnswer } from "@/components/QuickAnswer";
import { Section, SectionHeading } from "@/components/Section";
import { Txt } from "@/components/Txt";
import { getContent, lp, type Lang } from "@/lib/i18n";
import { howToSchema, pageSchema } from "@/lib/schema";

export function HomeCareView({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const { homeCare, areasServed, areasConfirm, ui, waMessages } = c;
  const o = homeCare.overview;
  const entry = c.seo["/home-care"];
  return (
    <>
      <PageHero lang={lang} trail={[{ name: ui.navHomeCare, path: "/home-care" }]} h1={o.h1} ta={o.ta} intro={o.intro}>
        <WhatsAppButton lang={lang} size="lg" label={ui.bookHomeCare} message={waMessages.homeCare} where="homecare-hero" />
        <CallButton lang={lang} size="lg" variant="ghost" where="homecare-hero" />
      </PageHero>
      <QuickAnswer label={ui.inShort} text={entry.answer ?? entry.description} />

      <HomeCareCards lang={lang} />

      <Section bg="mint" id="areas">
        <SectionHeading title={ui.areasWeServe} />
        <CheckList items={areasServed} className="grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3" />
        <p className="mt-4 text-sm">
          <Txt>{areasConfirm}</Txt>
        </p>
        <p className="mt-2 text-sm text-muted">{ui.areasNotSure}</p>
      </Section>

      <Section id="how-booking-works">
        <SectionHeading title={o.howTitle} />
        <ol className="grid gap-4 md:grid-cols-4">
          {o.how.map((s, i) => (
            <li key={s.title}>
              <Card className="h-full">
                <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-red text-lg font-extrabold text-white">{i + 1}</span>
                <h3 className="font-bold text-navy">{s.title}</h3>
                <p className="mt-1 text-sm text-muted">{s.text}</p>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      <Section bg="mint">
        <div className="grid items-center gap-6 md:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading title={o.pricingTitle} />
            <p className="-mt-4 text-muted md:text-lg">{o.pricing}</p>
            <p className="mt-2 text-sm">
              <Txt>{o.pricingConfirm}</Txt>
            </p>
          </div>
          <Card>
            <h3 className="font-bold text-navy">{ui.caringDiabetes}</h3>
            <p className="mt-1 text-sm text-muted">{ui.caringDiabetesText}</p>
            <Link href={lp(lang, "/diabetes-care")} className={`${btnClass("navy")} mt-4`}>
              {ui.navDiabetesCare}
            </Link>
          </Card>
        </div>
      </Section>

      <CtaBand lang={lang} title={o.ctaTitle} text={o.ctaText} waMessage={waMessages.homeCare} />
      <JsonLd data={howToSchema(lang, o.howTitle, entry.answer ?? entry.description, o.how, "/home-care")} />
      <JsonLd data={pageSchema(lang, "/home-care", { type: "CollectionPage", name: entry.title, description: entry.answer ?? entry.description })} />
    </>
  );
}
