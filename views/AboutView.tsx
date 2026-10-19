import Link from "next/link";
import { ApplyButton, btnClass } from "@/components/ActionLinks";
import { Card } from "@/components/Card";
import { CountUp } from "@/components/CountUp";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { QuickAnswer } from "@/components/QuickAnswer";
import { Section, SectionHeading } from "@/components/Section";
import { Ta, Txt } from "@/components/Txt";
import { getContent, lp, type Lang } from "@/lib/i18n";
import { pageSchema, personSchema } from "@/lib/schema";

export function AboutView({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const { about, images, site, ui } = c;
  const l = about.legacy;
  const x = about.experience;
  const entry = c.seo["/about"];
  return (
    <>
      <PageHero lang={lang} trail={[{ name: ui.navAbout, path: "/about" }]} h1={about.h1} ta={about.ta} intro={about.intro} highlight={x.highlight}>
        <ApplyButton lang={lang} size="lg" label={ui.learnWithUs} where="about-hero" />
        <a href="#legacy" className={btnClass("ghost", "lg")}>
          {l.title}
        </a>
      </PageHero>

      {/* HIGHLIGHT: experience band directly below the intro */}
      <section aria-labelledby="experience-title" className="relative overflow-hidden bg-gold py-10 text-navy md:py-14">
        <div aria-hidden="true" className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/25" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 right-10 h-64 w-64 rounded-full bg-navy/10" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div data-reveal className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-widest text-navy/80">{x.eyebrow}</p>
            <h2 id="experience-title" className="mt-1 text-3xl font-black leading-tight md:text-5xl">
              {x.title}
            </h2>
            <p className="mt-4 text-base font-medium text-navy/90 md:text-lg">{x.text}</p>
          </div>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {x.items.map((it) => (
              <li key={it.label} className="rounded-2xl bg-navy p-6 text-white shadow-card">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold text-navy">
                  <Icon name={it.icon} className="h-6 w-6" />
                </span>
                <p className="mt-3 text-5xl font-black leading-none text-gold md:text-6xl">
                  <CountUp to={it.value} />
                </p>
                <p className="mt-2 text-sm font-semibold text-white/90 md:text-base">{it.label}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm">
            <Txt>{x.confirm}</Txt>
          </p>
        </div>
      </section>

      <QuickAnswer label={ui.inShort} text={entry.answer ?? entry.description} />

      <Section>
        <div className="grid items-start gap-8 md:grid-cols-[1fr_1.5fr]">
          <figure>
            <div className="relative">
              <div aria-hidden="true" className="absolute -bottom-3 -right-3 left-3 top-3 rounded-2xl bg-gold/40" />
              <Photo img={images.founderPortrait} sizes="(max-width: 768px) 90vw, 400px" className="relative aspect-[4/5] shadow-card" />
            </div>
            <figcaption className="mt-4 text-sm text-muted">
              <strong className="text-navy">{ui.founderName}</strong> — {ui.founderCaption}
            </figcaption>
          </figure>
          <div id="founder">
            <SectionHeading title={about.timelineTitle} />
            <ol className="relative space-y-6 border-l-2 border-brand-green/40 pl-6">
              {about.timeline.map((t) => (
                <li key={t.title} className="relative">
                  <span className="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-brand-red" aria-hidden="true" />
                  <p className="text-sm font-bold text-brand-red">
                    <Txt>{t.when}</Txt>
                  </p>
                  <h3 className="text-lg font-bold text-navy">{t.title}</h3>
                  <p className="mt-1 text-muted">
                    <Txt>{t.text}</Txt>
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section bg="mint">
        <SectionHeading title={about.philosophy.title} />
        <div className="grid gap-4 md:grid-cols-3">
          {about.philosophy.points.map((p) => (
            <Card key={p.title}>
              <h3 className="text-lg font-bold text-navy">{p.title}</h3>
              <p className="mt-2 text-muted">{p.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <SectionHeading title={about.missionTitle} />
            <div className="-mt-4 space-y-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-brand-green-dark">{about.missionLabel}</p>
                <p className="text-lg font-bold text-navy">{site.mission}</p>
                {lang === "en" && (
                  <Ta as="p" className="text-muted">
                    {site.missionTa}
                  </Ta>
                )}
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-brand-green-dark">{about.visionLabel}</p>
                <p className="text-lg text-muted">{site.vision}</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={lp(lang, "/academy")} className={btnClass("navy")}>
                {ui.exploreAcademy}
              </Link>
              <Link href={lp(lang, "/home-care")} className={btnClass("outline")}>
                {ui.navHomeCare}
              </Link>
            </div>
          </div>
          <Photo img={images.lions} className="aspect-[4/3] shadow-card" />
        </div>
      </Section>

      {/* ---------------- Legacy & portfolio (merged from the former /portfolio page) ---------------- */}
      <Section bg="mint" id="legacy">
        <SectionHeading title={l.title} ta={l.ta} intro={l.intro} as="h2" />
      </Section>

      <Section id="archive" className="!pt-0">
        <SectionHeading title={l.archive.title} intro={l.archive.intro} as="h3" />
        <div className="grid gap-6 md:grid-cols-2">
          {l.archive.items.map((it, i) => (
            <figure key={it.img.src}>
              <Photo img={it.img} className={`aspect-[4/3] shadow-card ${i === 0 ? "sepia" : ""}`} />
              <figcaption className="mt-2 text-sm text-muted">
                <Txt>{it.caption}</Txt>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section bg="mint" id="associations">
        <SectionHeading title={l.associationsTitle} intro={l.associationsNote} as="h3" />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {l.associations.map((a) => (
            <li key={a.name}>
              <Card className="h-full overflow-hidden !p-0">
                <Photo img={a.img} rounded={false} sizes="(max-width: 768px) 100vw, 33vw" className="aspect-[5/4]" />
                <div className="p-5">
                  <h4 className="font-bold text-navy">{a.name}</h4>
                  <p className="text-sm text-muted">{a.org}</p>
                  <p className="mt-1 text-xs">
                    <Txt>{a.note}</Txt>
                  </p>
                </div>
              </Card>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-muted">{ui.notEndorsements}</p>
      </Section>

      <Section id="community">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <SectionHeading title={l.community.title} as="h3" />
            <p className="-mt-4 text-muted md:text-lg">
              <Txt>{l.community.text}</Txt>
            </p>
          </div>
          <Photo img={images.lions} className="aspect-[4/3] shadow-card" />
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {images.camps.map((cm) => (
            <li key={cm.src}>
              <Photo img={cm} sizes="(max-width: 768px) 50vw, 25vw" className="aspect-[4/3]" />
            </li>
          ))}
        </ul>
      </Section>

      <Section bg="mint" id="recognition">
        <SectionHeading title={l.recognition.title} intro={l.recognition.text} as="h3" />
        <ul className="grid gap-5 md:grid-cols-3">
          {l.recognition.items.map((r) => (
            <li key={r.img.src}>
              <figure>
                <Photo img={r.img} sizes="(max-width: 768px) 100vw, 33vw" className="aspect-[4/3] shadow-card" />
                <figcaption className="mt-2 text-sm text-muted">
                  <Txt>{r.caption}</Txt>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="from-the-lab">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <Photo img={images.cake} className="aspect-[4/3] shadow-card" />
          <div>
            {l.cake.ta && (
              <Ta as="p" className="text-lg font-bold text-brand-red">
                {l.cake.ta}
              </Ta>
            )}
            <h3 className="text-2xl font-extrabold text-navy md:text-3xl">{l.cake.title}</h3>
            <p className="mt-3 text-muted md:text-lg">
              <Txt>{l.cake.text}</Txt>
            </p>
          </div>
        </div>
      </Section>

      <CtaBand lang={lang} title={about.ctaTitle} ta={about.ctaTa} showApply />
      <JsonLd data={personSchema(lang)} />
      <JsonLd data={pageSchema(lang, "/about", { type: "AboutPage", name: entry.title, description: entry.answer ?? entry.description, mainEntity: `${site.url}/about#founder` })} />
    </>
  );
}
