import Link from "next/link";
import { btnClass, WhatsAppButton } from "@/components/ActionLinks";
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
import { pageSchema } from "@/lib/schema";

export function DiabetesView({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const { diabetesCare: d, disclaimers, site, ui, waMessages, homeCare } = c;
  const entry = c.seo["/diabetes-care"];
  return (
    <>
      <PageHero lang={lang} trail={[{ name: ui.navDiabetesCare, path: "/diabetes-care" }]} h1={d.h1} ta={d.ta} intro={d.intro}>
        <WhatsAppButton lang={lang} size="lg" label={ui.talkToTeam} message={waMessages.diabetesCare} where="diabetes-hero" />
        <Link href={lp(lang, "/academy/health-assistant-for-diabetics")} className={btnClass("ghost", "lg")}>
          {c.courses.diabetic.title}
        </Link>
      </PageHero>
      <QuickAnswer label={ui.inShort} text={entry.answer ?? entry.description} />

      <Section>
        <div className="grid items-start gap-6 md:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading title={d.context.title} />
            <p className="-mt-4 text-base text-muted md:text-lg">{d.context.text}</p>
            <p className="mt-3 text-sm">
              {ui.source}{" "}
              <a className="font-semibold text-navy underline" href={d.context.source.href} target="_blank" rel="noopener noreferrer">
                {d.context.source.label}
              </a>
            </p>
            <p className="mt-2 text-sm">
              <Txt>{d.context.confirm}</Txt>
            </p>
          </div>
          <Card className="bg-mint">
            <p className="text-sm font-bold uppercase tracking-wide text-brand-green-dark">{ui.ourMission}</p>
            <p className="mt-2 text-lg font-bold text-navy">{site.mission}</p>
            {lang === "en" && site.missionTa && (
              <Ta as="p" className="mt-2 text-sm text-muted">
                {site.missionTa}
              </Ta>
            )}
          </Card>
        </div>
      </Section>

      <Section bg="mint">
        <SectionHeading title={d.pillarsTitle} intro={d.pillarsIntro} />
        <div className="space-y-5">
          {d.pillars.map((p, i) => (
            <article key={p.slug} id={p.slug}>
              <Card>
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-gold">
                    <Icon name={p.icon} className="h-7 w-7" />
                  </span>
                  <div>
                    <Ta as="p" className="text-sm font-bold text-brand-red">
                      {ui.pillar} {i + 1}{p.ta ? ` · ${p.ta}` : ""}
                    </Ta>
                    <h2 className="text-xl font-extrabold text-navy md:text-2xl">{p.title}</h2>
                    <p className="mt-2 text-muted md:text-lg">{p.text}</p>
                    <Link href={lp(lang, p.link.href)} className="mt-3 inline-flex min-h-11 items-center gap-1.5 font-semibold text-navy underline-offset-4 hover:underline">
                      {p.link.label}
                      <Icon name="arrow" className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Card>
            </article>
          ))}
        </div>
      </Section>

      <Section id="warning-signs">
        <SectionHeading title={d.warning.title} />
        <div className="grid gap-6 md:grid-cols-2">
          {[d.warning.low, d.warning.high].map((w) => (
            <Card key={w.title}>
              {w.ta && (
                <Ta as="p" className="text-sm font-bold text-brand-red">
                  {w.ta}
                </Ta>
              )}
              <h3 className="text-xl font-extrabold text-navy">{w.title}</h3>
              <CheckList items={w.signs} className="mt-3" />
              <p className="mt-4 rounded-lg bg-mint p-3 text-sm text-navy">
                <strong>{ui.whatToDo} </strong>
                {w.action}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section bg="mint">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-xl font-extrabold text-navy">{d.seeDoctor.title}</h2>
            <CheckList items={d.seeDoctor.points} className="mt-3" />
          </Card>
          <Card>
            <h2 className="text-xl font-extrabold text-navy">{d.careComes.title}</h2>
            <p className="mt-2 text-muted">{d.careComes.text}</p>
            <ul className="mt-3 space-y-2 font-semibold text-navy">
              {homeCare.services.map((s) => (
                <li key={s.slug}>
                  <Link className="underline underline-offset-4" href={lp(lang, s.href)}>
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link className="underline underline-offset-4" href={lp(lang, "/academy/health-assistant-for-diabetics")}>
                  {c.courses.diabetic.title}
                </Link>
              </li>
            </ul>
          </Card>
        </div>
      </Section>

      <FaqSection lang={lang} faqs={d.faqs} title={d.faqTitle} />

      <CtaBand lang={lang} title={d.ctaTitle} ta={site.taglineTa} text={disclaimers.medical} waMessage={waMessages.diabetesCare} />
      <JsonLd data={pageSchema(lang, "/diabetes-care", { name: entry.title, description: entry.answer ?? entry.description })} />
    </>
  );
}
