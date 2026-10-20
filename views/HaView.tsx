import Link from "next/link";
import { ApplyButton, btnClass, WhatsAppButton } from "@/components/ActionLinks";
import { Card } from "@/components/Card";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { QuickAnswer } from "@/components/QuickAnswer";
import { Section, SectionHeading } from "@/components/Section";
import { Txt } from "@/components/Txt";
import { getContent, lp, type Lang } from "@/lib/i18n";
import { courseSchema, pageSchema } from "@/lib/schema";

export function HaView({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const { haPage: p, courses, ui, waMessages } = c;
  const entry = c.seo["/academy/health-assistant-for-diabetics"];
  return (
    <>
      <PageHero
        lang={lang}
        trail={[
          { name: ui.navAcademy, path: "/academy" },
          { name: courses.diabetic.title, path: "/academy/health-assistant-for-diabetics" },
        ]}
        h1={p.h1}
        ta={p.ta}
      >
        <ApplyButton lang={lang} size="lg" label={ui.applyCourse} message={courses.diabetic.apply} where="ha-hero" />
        <WhatsAppButton lang={lang} size="lg" variant="ghost" label={ui.askWhatsApp} message={waMessages.diabeticCourse} where="ha-hero" />
      </PageHero>
      <QuickAnswer label={ui.inShort} text={entry.answer ?? entry.description} />

      <Section>
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 text-base text-muted md:text-lg">
            <SectionHeading title={ui.courseOverview} />
            {p.overview.map((t) => (
              <p key={t}>{t}</p>
            ))}
            <p>
              <Link href={lp(lang, "/diabetes-care")} className="font-semibold text-navy underline">
                {ui.navDiabetesCare}
              </Link>
              {" · "}
              <Link href={lp(lang, "/academy/point-of-care-testing")} className="font-semibold text-navy underline">
                {courses.poct.title}
              </Link>
            </p>
          </div>
          <div className="space-y-4">
            <Card>
              <h2 className="text-lg font-extrabold text-navy">{p.mode.title}</h2>
              <p className="mt-2 text-sm text-muted">
                <Txt>{p.mode.text}</Txt>
              </p>
            </Card>
            <Card>
              <h2 className="text-lg font-extrabold text-navy">{p.family.title}</h2>
              <p className="mt-2 text-sm text-muted">{p.family.text}</p>
            </Card>
          </div>
        </div>
      </Section>

      <Section bg="mint" id="syllabus">
        <SectionHeading title={p.syllabusTitle} intro={p.syllabusIntro} />
        <ol className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {p.syllabus.map((s, i) => (
            <li key={s.title}>
              <Card className="h-full">
                <span className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy font-bold text-white">{i + 1}</span>
                <h3 className="font-bold text-navy">{s.title}</h3>
                <p className="mt-1 text-sm text-muted">{s.text}</p>
              </Card>
            </li>
          ))}
        </ol>
        <p className="mt-6 flex gap-2 rounded-xl bg-white p-4 text-sm text-navy">
          <Icon name="shield" className="h-5 w-5 shrink-0 text-brand-green-dark" />
          {p.scope}
        </p>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-xl font-extrabold text-navy">{p.kit.title}</h2>
            <p className="mt-2 text-muted">
              <Txt>{p.kit.text}</Txt>
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-extrabold text-navy">{p.fee.title}</h2>
            <p className="mt-2 text-3xl font-extrabold text-brand-red">{courses.diabetic.fee}</p>
            <p className="text-sm text-muted">{p.fee.text}</p>
            <p className="mt-2 text-sm">
              <Txt>{p.fee.confirm}</Txt>
            </p>
          </Card>
        </div>
        <div className="mt-8">
          <Link href={lp(lang, "/admissions")} className={btnClass("navy")}>
            {ui.admissionProcess}
          </Link>
        </div>
      </Section>

      <FaqSection lang={lang} faqs={p.faqs} title={p.faqTitle} bg="mint" />

      <CtaBand lang={lang} title={p.ctaTitle} ta={p.ctaTa} text={p.ctaText} showApply applyMessage={courses.diabetic.apply} waMessage={waMessages.diabeticCourse} />

      <JsonLd data={courseSchema(lang, "diabetic", p.schemaDescription, false)} />
      <JsonLd data={pageSchema(lang, "/academy/health-assistant-for-diabetics", { name: entry.title, description: entry.answer ?? entry.description })} />
    </>
  );
}
