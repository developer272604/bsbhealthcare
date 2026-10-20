import Link from "next/link";
import { ApplyButton, btnClass, WhatsAppButton } from "@/components/ActionLinks";
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
import { courseSchema, pageSchema } from "@/lib/schema";

export function PoctView({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const { poctPage: p, courses, skills, ui, waMessages } = c;
  const entry = c.seo["/academy/point-of-care-testing"];
  return (
    <>
      <PageHero
        lang={lang}
        trail={[
          { name: ui.navAcademy, path: "/academy" },
          { name: courses.poct.title, path: "/academy/point-of-care-testing" },
        ]}
        h1={p.h1}
        ta={p.ta}
      >
        <ApplyButton lang={lang} size="lg" label={ui.applyPoct} message={courses.poct.apply} where="poct-hero" />
        <WhatsAppButton lang={lang} size="lg" variant="ghost" label={ui.askWhatsApp} message={waMessages.poct} where="poct-hero" />
      </PageHero>
      <QuickAnswer label={ui.inShort} text={entry.answer ?? entry.description} />

      <Section>
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 text-base text-muted md:text-lg">
            <SectionHeading title={ui.overview} />
            {p.overview.map((t) => (
              <p key={t}>{t}</p>
            ))}
            <p>
              <Link href={lp(lang, "/academy")} className="font-semibold text-navy underline">
                {ui.partOfAcademy}
              </Link>
              {" · "}
              <Link href={lp(lang, "/academy/health-assistant-for-diabetics")} className="font-semibold text-navy underline">
                {courses.diabetic.title}
              </Link>
            </p>
          </div>
          <Card className="self-start">
            <h2 className="text-xl font-extrabold text-navy">{ui.whoCanJoin}</h2>
            <CheckList items={p.whoCanJoin} className="mt-3" />
          </Card>
        </div>
      </Section>

      <Section bg="mint" id="modules">
        <SectionHeading title={p.modulesTitle} />
        <ol className="space-y-4">
          {skills.map((s, i) => (
            <li key={s.slug}>
              <Card>
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-mint text-brand-green-dark">
                    <Icon name={s.icon} className="h-7 w-7" />
                  </span>
                  <div className="flex-1">
                    <Ta as="p" className="text-sm font-bold text-brand-red">
                      {ui.module} {i + 1}
                      {lang === "en" && s.ta ? ` · ${s.ta}` : ""}
                    </Ta>
                    <h3 className="text-lg font-bold text-navy">{lang === "en" ? s.en : s.ta}</h3>
                    <dl className="mt-3 grid gap-3 text-sm md:grid-cols-3 md:text-base">
                      <div>
                        <dt className="font-bold text-navy">{ui.whatItIs}</dt>
                        <dd className="text-muted">{s.what}</dd>
                      </div>
                      <div>
                        <dt className="font-bold text-navy">{ui.whyMatters}</dt>
                        <dd className="text-muted">{s.why}</dd>
                      </div>
                      <div>
                        <dt className="font-bold text-navy">{ui.willPractise}</dt>
                        <dd className="text-muted">{s.practise}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <h2 className="text-xl font-extrabold text-navy">{p.schedule.title}</h2>
            <dl className="mt-3 space-y-2 text-sm">
              <div>
                <dt className="font-bold text-navy">{ui.duration}</dt>
                <dd>
                  <Txt>{p.schedule.duration}</Txt>
                </dd>
              </div>
              <div>
                <dt className="font-bold text-navy">{ui.schedule}</dt>
                <dd>
                  <Txt>{p.schedule.schedule}</Txt>
                </dd>
              </div>
              <div>
                <dt className="font-bold text-navy">{ui.mode}</dt>
                <dd>
                  <Txt>{p.schedule.mode}</Txt>
                </dd>
              </div>
            </dl>
          </Card>
          <Card>
            <h2 className="text-xl font-extrabold text-navy">{p.fee.title}</h2>
            <p className="mt-3 text-3xl font-extrabold text-brand-red">{courses.poct.fee}</p>
            <p className="mt-1 text-sm text-muted">{p.fee.text}</p>
            <p className="mt-2 text-sm">
              <Txt>{p.fee.confirm}</Txt>
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-extrabold text-navy">{p.certificate.title}</h2>
            <p className="mt-3 text-muted">{p.certificate.text}</p>
            <p className="mt-2 text-sm">
              <Txt>{p.certificate.confirm}</Txt>
            </p>
          </Card>
        </div>
      </Section>

      <Section bg="mint">
        <SectionHeading title={p.careersTitle} />
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {p.careers.map((cr) => (
            <li key={cr.title}>
              <Card className="h-full">
                <h3 className="font-bold text-navy">{cr.title}</h3>
                <p className="mt-1 text-sm text-muted">{cr.text}</p>
              </Card>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm font-semibold text-navy">{p.careersNote}</p>
        <div className="mt-6">
          <Link href={lp(lang, "/admissions")} className={btnClass("navy")}>
            {ui.admissionProcess}
          </Link>
        </div>
      </Section>

      <FaqSection lang={lang} faqs={p.faqs} title={p.faqTitle} />

      <CtaBand lang={lang} title={p.ctaTitle} ta={p.ctaTa} text={p.ctaText} showApply applyMessage={courses.poct.apply} waMessage={waMessages.poct} />

      <JsonLd data={courseSchema(lang, "poct", p.schemaDescription, true)} />
      <JsonLd data={pageSchema(lang, "/academy/point-of-care-testing", { name: entry.title, description: entry.answer ?? entry.description })} />
    </>
  );
}
