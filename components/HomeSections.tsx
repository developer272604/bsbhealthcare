import Link from "next/link";
import { getContent, lp, type Lang } from "@/lib/i18n";
import { site } from "@/lib/content";
import { telHref } from "@/lib/utils";
import { ApplyButton, btnClass } from "./ActionLinks";
import { Card, IconCard } from "./Card";
import { CtaBand } from "./CtaBand";
import { GoogleMap } from "./GoogleMap";
import { Icon } from "./Icon";
import { Photo } from "./Photo";
import { Section, SectionHeading } from "./Section";
import { TestimonialCard } from "./TestimonialCard";
import { Ta, Txt } from "./Txt";
import { YouTubeEmbed } from "./YouTubeEmbed";

/* 1. HERO ------------------------------------------------------------------ */
export function HomeHero({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const { hero, ui } = c;
  return (
    <section className="bg-gradient-to-b from-mint to-white">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.25fr_1fr] md:py-16">
        <div>
          {hero.ta && (
            <Ta as="p" className="text-2xl font-extrabold leading-snug text-brand-red md:text-4xl">
              {hero.ta}
            </Ta>
          )}
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-navy md:text-5xl">{hero.h1}</h1>
          <p className="mt-4 max-w-xl text-base text-muted md:text-lg">{hero.sub}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ApplyButton lang={lang} size="lg" label={hero.ctaApply} where="hero" />
            <Link href={lp(lang, "/home-care")} className={btnClass("outline", "lg")}>
              {hero.ctaHome}
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted">
            {ui.preferTalk}{" "}
            <a className="font-semibold text-navy underline" href={telHref} data-track="click_call" data-track-location="hero">
              {ui.call} {site.phoneDisplay}
            </a>
          </p>
        </div>
        <figure className="relative mx-auto w-full max-w-sm">
          <div aria-hidden="true" className="absolute -bottom-3 -right-3 left-3 top-3 rounded-2xl bg-gold/40" />
          <Photo
            img={c.images.founderPortrait}
            priority
            sizes="(max-width: 768px) 80vw, 400px"
            className="relative aspect-[4/5] shadow-card"
          />
          <figcaption className="relative z-10 -mt-6 mx-auto w-[85%] rounded-xl bg-navy px-4 py-2.5 text-center text-white shadow-card">
            <span className="block font-bold">{ui.founderName}</span>
            <span className="block text-xs text-white/85">{ui.founderCaption}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* 2. TRUST STRIP ----------------------------------------------------------- */
export function TrustStrip({ lang }: { lang: Lang }) {
  const { trust, ui } = getContent(lang);
  return (
    <section aria-label={ui.trustLabel} className="border-y border-navy/10 bg-white">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-5 px-4 py-6 sm:px-6 md:grid-cols-4 lg:grid-cols-5">
        {trust.map((t) => (
          <li key={t.title} className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mint text-brand-green-dark">
              <Icon name={t.icon} className="h-6 w-6" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold text-navy">{t.title}</span>
              <span className="block text-xs text-muted">{t.text}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* 3. SKILLS ---------------------------------------------------------------- */
export function SkillsGrid({ lang, link = true }: { lang: Lang; link?: boolean }) {
  const { skills, homeSections, ui } = getContent(lang);
  return (
    <Section bg="mint" id="skills">
      <SectionHeading title={homeSections.learnTitle} ta={homeSections.learnTa} intro={homeSections.learnIntro} />
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((s) => (
          <li key={s.slug}>
            <IconCard icon={s.icon} ta={lang === "en" ? s.ta : undefined} title={lang === "en" ? s.en : s.ta} text={s.what} />
          </li>
        ))}
        {link && (
          <li>
            <Link
              href={lp(lang, "/academy/point-of-care-testing")}
              className="flex h-full min-h-40 flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-navy/30 p-5 text-center font-bold text-navy transition hover:bg-white"
            >
              {ui.seeSyllabus}
              <Icon name="arrow" className="h-5 w-5" />
            </Link>
          </li>
        )}
      </ul>
    </Section>
  );
}

/* 4. COURSES --------------------------------------------------------------- */
export function CourseCards({ lang, heading = true }: { lang: Lang; heading?: boolean }) {
  const { courses, homeSections, ui } = getContent(lang);
  return (
    <Section id="courses">
      {heading && <SectionHeading title={homeSections.coursesTitle} ta={homeSections.coursesTa} />}
      <div className="grid gap-6 md:grid-cols-2">
        {Object.values(courses).map((c) => (
          <Card key={c.slug} className="flex flex-col">
            {c.ta && (
              <Ta as="p" className="text-sm font-bold text-brand-red">
                {c.ta}
              </Ta>
            )}
            <h3 className="mt-1 text-xl font-extrabold text-navy md:text-2xl">{c.title}</h3>
            <p className="mt-2 text-muted">{c.summary}</p>
            <dl className="mt-4 grid grid-cols-3 gap-3 rounded-xl bg-mint p-4 text-sm">
              <div>
                <dt className="text-xs font-semibold uppercase text-muted">{ui.duration}</dt>
                <dd className="font-bold text-navy">
                  <Txt>{c.duration}</Txt>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase text-muted">{ui.mode}</dt>
                <dd className="font-bold text-navy">{c.mode}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase text-muted">{ui.fee}</dt>
                <dd className="text-lg font-extrabold text-brand-red">{c.fee}</dd>
              </div>
            </dl>
            <p className="mt-2 text-xs">
              <Txt>{c.feeNote}</Txt>
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <ApplyButton lang={lang} label={ui.apply} message={c.apply} where={`course-${c.slug}`} />
              <Link href={lp(lang, c.href)} className={btnClass("outline")}>
                {ui.courseDetails}
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* 5. WHY THIS TRAINING ----------------------------------------------------- */
export function WhyTraining({ lang }: { lang: Lang }) {
  const { whyTraining } = getContent(lang);
  return (
    <Section bg="navy" id="why">
      <SectionHeading title={whyTraining.title} ta={whyTraining.titleTa} light />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {whyTraining.points.map((p) => (
          <li key={p.en} className="rounded-2xl bg-white/10 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/15">
            <span className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-navy">
              <Icon name={p.icon} className="h-7 w-7" />
            </span>
            {p.ta && (
              <Ta as="p" className="text-sm font-bold text-gold">
                {p.ta}
              </Ta>
            )}
            <p className="mt-1 text-lg font-bold">{p.en}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* 6. ADMISSION IN 5 STEPS -------------------------------------------------- */
export function AdmissionSteps({ lang, detailsLink = true }: { lang: Lang; detailsLink?: boolean }) {
  const { admissionSteps, ui } = getContent(lang);
  return (
    <Section id="steps">
      <SectionHeading title={admissionSteps.title} ta={admissionSteps.titleTa} />
      <ol className="grid gap-4 md:grid-cols-5">
        {admissionSteps.steps.map((s) => (
          <li key={s.n} className="relative rounded-2xl border border-navy/10 bg-white p-5 shadow-card transition duration-300 hover:-translate-y-1">
            <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-red text-lg font-extrabold text-white">
              {s.n}
            </span>
            {s.ta && (
              <Ta as="p" className="text-sm font-bold text-brand-green-dark">
                {s.ta}
              </Ta>
            )}
            <h3 className="font-bold text-navy">{s.en}</h3>
            <p className="mt-1 text-sm text-muted">{s.text}</p>
          </li>
        ))}
      </ol>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ApplyButton lang={lang} size="lg" where="steps" />
        {detailsLink && (
          <Link href={lp(lang, "/admissions")} className={btnClass("outline", "lg")}>
            {ui.feesDetails}
          </Link>
        )}
      </div>
    </Section>
  );
}

/* 7. FOUNDER --------------------------------------------------------------- */
export function FounderPreview({ lang }: { lang: Lang }) {
  const { founder, images, ui } = getContent(lang);
  return (
    <Section bg="mint" id="founder">
      <div className="grid items-center gap-8 md:grid-cols-[1fr_1.4fr]">
        <Photo img={images.founderMicroscope} sizes="(max-width: 768px) 100vw, 40vw" className="aspect-[4/3] shadow-card" />
        <div>
          <SectionHeading title={founder.heading} ta={founder.headingTa} />
          <p className="-mt-4 text-lg font-bold text-navy">{ui.founderName}</p>
          <p className="mt-2 text-muted">{founder.short}</p>
          <Link href={lp(lang, "/about")} className={`${btnClass("navy")} mt-5`}>
            {founder.cta}
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}

/* 8. HOME CARE CARDS ------------------------------------------------------- */
export function HomeCareCards({ lang, heading = true }: { lang: Lang; heading?: boolean }) {
  const { homeCare, homeSections, ui } = getContent(lang);
  return (
    <Section id="home-care">
      {heading && <SectionHeading title={homeSections.homeCareTitle} ta={homeSections.homeCareTa} intro={homeSections.homeCareIntro} />}
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {homeCare.services.map((s) => (
          <li key={s.slug}>
            <IconCard icon={s.icon} ta={s.ta} title={s.name} text={s.card} href={lp(lang, s.href)} linkLabel={ui.viewService} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* 9. DIABETES BAND – flat navy with gold accents (matches the brand theme; no gradient) -------- */
export function DiabetesBand({ lang }: { lang: Lang }) {
  const { homeSections, diabetesCare } = getContent(lang);
  const d = homeSections.diabetesBand;
  return (
    <section className="relative overflow-hidden bg-navy py-12 text-white md:py-16" aria-labelledby="dc-title">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 bg-gold" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div data-reveal className="max-w-3xl">
          {d.ta && (
            <Ta as="p" className="text-xl font-bold text-gold">
              {d.ta}
            </Ta>
          )}
          <h2 id="dc-title" className="mt-1 text-3xl font-extrabold md:text-4xl">
            {d.title}
          </h2>
          <span aria-hidden="true" className="mt-3 block h-1 w-14 rounded-full bg-gold" />
          <p className="mt-4 text-white/90 md:text-lg">{d.text}</p>
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {diabetesCare.pillars.map((p) => (
            <li key={p.slug} className="rounded-xl border border-white/15 bg-white/10 p-3 text-center transition duration-300 hover:-translate-y-1 hover:border-gold/60 hover:bg-white/15">
              <span className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold text-navy">
                <Icon name={p.icon} className="h-6 w-6" />
              </span>
              <p className="mt-2 text-sm font-bold leading-tight">{p.title}</p>
            </li>
          ))}
        </ul>
        <Link href={lp(lang, "/diabetes-care")} className={`${btnClass("gold", "lg")} mt-8`}>
          {d.cta}
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

/* 10. LEGACY PREVIEW ------------------------------------------------------- */
export function LegacyPreview({ lang }: { lang: Lang }) {
  const { homeSections, about, images, ui } = getContent(lang);
  const l = homeSections.legacy;
  return (
    <Section id="legacy">
      <SectionHeading title={l.title} ta={l.ta} intro={l.text} />
      <div className="grid gap-4 md:grid-cols-3">
        <figure>
          <Photo img={images.vintage} sizes="(max-width: 768px) 100vw, 33vw" className="aspect-[4/3] sepia" />
          <figcaption className="mt-2 text-sm text-muted">{ui.vintageCaption}</figcaption>
        </figure>
        <figure>
          <Photo img={images.mmcWall} sizes="(max-width: 768px) 100vw, 33vw" className="aspect-[4/3]" />
          <figcaption className="mt-2 text-sm text-muted">{ui.mmcCaption}</figcaption>
        </figure>
        <Card className="flex flex-col justify-center">
          <h3 className="text-lg font-bold text-navy">{about.legacy.associationsTitle}</h3>
          <ul className="mt-3 space-y-1.5 text-sm text-muted">
            {about.legacy.associations.map((a) => (
              <li key={a.name}>
                <span className="font-semibold text-ink">{a.name}</span> — {a.org}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted">{ui.notEndorsements}</p>
          <Link href={lp(lang, "/about#legacy")} className={`${btnClass("outline")} mt-4 self-start`}>
            {l.cta}
          </Link>
        </Card>
      </div>
    </Section>
  );
}

/* 12. TESTIMONIALS (hidden until real ones are added) ---------------------- */
export function Testimonials({ lang }: { lang: Lang }) {
  const { testimonials, testimonialVideoId, homeSections, ui } = getContent(lang);
  const empty = testimonials.length === 0 && !testimonialVideoId;
  if (empty) {
    // Visible only in development so the client remembers to add real testimonials.
    if (process.env.NODE_ENV === "production") return null;
    return (
      <Section bg="mint" id="testimonials">
        <p className="rounded-xl border-2 border-dashed border-amber-500 bg-amber-50 p-4 text-sm">
          <strong>Dev note:</strong> Testimonials section is hidden in production until real testimonials are added in lib/content.ts.{" "}
          <Txt>[CONFIRM: add 3–6 real, consented testimonials – never invent]</Txt>
        </p>
      </Section>
    );
  }
  return (
    <Section bg="mint" id="testimonials">
      <SectionHeading title={homeSections.testimonialsTitle} ta={homeSections.testimonialsTa} />
      {testimonials.length > 0 && (
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name + t.quote.slice(0, 12)}>
              <TestimonialCard t={t} />
            </li>
          ))}
        </ul>
      )}
      {testimonialVideoId && (
        <div className="mx-auto mt-8 max-w-3xl">
          <YouTubeEmbed id={testimonialVideoId} title={ui.videoTitle} playLabel={ui.playVideo} />
        </div>
      )}
    </Section>
  );
}

/* 14. FINAL CTA + MAP ------------------------------------------------------ */
export function FinalCta({ lang }: { lang: Lang }) {
  const { homeSections, waMessages, ui } = getContent(lang);
  const c = homeSections.finalCta;
  return (
    <CtaBand lang={lang} title={c.en} ta={c.ta} text={c.text} showApply waMessage={waMessages.general}>
      <div className="mt-8 text-left">
        <GoogleMap title={ui.mapTitle} />
      </div>
    </CtaBand>
  );
}
