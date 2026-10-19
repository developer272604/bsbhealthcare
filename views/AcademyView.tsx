import Link from "next/link";
import { ApplyButton, btnClass, WhatsAppButton } from "@/components/ActionLinks";
import { Card, CheckList, IconCard } from "@/components/Card";
import { CtaBand } from "@/components/CtaBand";
import { CourseCards, SkillsGrid } from "@/components/HomeSections";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { QuickAnswer } from "@/components/QuickAnswer";
import { Section, SectionHeading } from "@/components/Section";
import { Txt } from "@/components/Txt";
import { getContent, lp, type Lang } from "@/lib/i18n";
import { pageSchema } from "@/lib/schema";

export function AcademyView({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const { academy, images, ui, waMessages } = c;
  const entry = c.seo["/academy"];
  return (
    <>
      <PageHero lang={lang} trail={[{ name: ui.navAcademy, path: "/academy" }]} h1={academy.h1} ta={academy.ta}>
        <ApplyButton lang={lang} size="lg" where="academy-hero" message={waMessages.apply} />
        <WhatsAppButton lang={lang} size="lg" variant="ghost" label={ui.askQuestion} where="academy-hero" />
      </PageHero>
      <QuickAnswer label={ui.inShort} text={entry.answer ?? entry.description} />

      <Section>
        <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 text-base text-muted md:text-lg">
            <SectionHeading title={academy.whyTitle} />
            {academy.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p>
              <Link className="font-semibold text-navy underline" href={lp(lang, "/about")}>
                {ui.founderStoryLink}
              </Link>{" "}
              ·{" "}
              <Link className="font-semibold text-navy underline" href={lp(lang, "/about#legacy")}>
                {ui.legacyLink}
              </Link>
            </p>
          </div>
          <Photo img={images.founderMicroscope} className="aspect-[4/3] shadow-card" />
        </div>
      </Section>

      <Section bg="mint">
        <SectionHeading title={academy.whoFor.title} />
        <CheckList items={academy.whoFor.points} className="max-w-2xl text-base md:text-lg" />
      </Section>

      <CourseCards lang={lang} />
      <SkillsGrid lang={lang} />

      <Section>
        <SectionHeading title={academy.methodTitle} />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {academy.method.map((m) => (
            <li key={m.title}>
              <IconCard icon={m.icon} title={m.title} text={m.text} />
            </li>
          ))}
        </ul>
      </Section>

      <Section bg="mint">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-xl font-extrabold text-navy">{academy.certificate.title}</h2>
            <p className="mt-2 text-muted">{academy.certificate.text}</p>
            <p className="mt-2 text-sm">
              <Txt>{academy.certificate.confirm}</Txt>
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-extrabold text-navy">{academy.placement.title}</h2>
            <p className="mt-2 text-muted">{academy.placement.text}</p>
          </Card>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={lp(lang, "/admissions")} className={btnClass("navy", "lg")}>
            {ui.feesHowToJoin}
          </Link>
          <Link href={lp(lang, "/home-care")} className={btnClass("outline", "lg")}>
            {ui.alsoHomeCare}
          </Link>
        </div>
      </Section>

      <CtaBand lang={lang} title={academy.ctaTitle} ta={academy.ctaTa} text={academy.ctaText} showApply applyMessage={waMessages.apply} />
      <JsonLd data={pageSchema(lang, "/academy", { name: entry.title, description: entry.answer ?? entry.description })} />
    </>
  );
}
