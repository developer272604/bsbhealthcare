import Image from "next/image";
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
import { TestimonialSlider } from "./TestimonialSlider";
import { YouTubeEmbed } from "./YouTubeEmbed";

/* 1. HERO ------------------------------------------------------------------ */
const delay = (ms: number): React.CSSProperties => ({ ["--d" as string]: `${ms}ms` });
const FEATURE_TONES = ["bg-sky-100 text-sky-700", "bg-emerald-100 text-emerald-700", "bg-red-100 text-brand-red"];

export function HomeHero({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const { hero, ui, images } = c;
  return (
    <section className="relative overflow-hidden bg-white lg:h-[calc(100svh-4rem)] lg:max-h-[760px] lg:min-h-[500px]">
      <div className="mx-auto flex max-w-[1560px] flex-col justify-center px-4 pt-8 sm:px-6 lg:h-full lg:px-10 lg:pt-0">
        {/* ---------------- LEFT: text (fades in on every page load) ---------------- */}
        <div className="relative z-10 pb-2 lg:w-[50%] lg:pb-0">
          {/* <p className="hero-in flex items-center gap-4 text-xs font-semibold tracking-[0.32em] text-sky-700 sm:text-sm" style={delay(0)}>
            <span aria-hidden="true" className="h-px w-12 bg-sky-500 sm:w-16" />
            {hero.eyebrow}
          </p> */}

          <h1 className="hero-in-soft text-[2rem] font-extrabold leading-[1.12] tracking-tight text-navy sm:text-5xl lg:text-[2.2rem] xl:text-[2.5rem] 2xl:text-[2.8rem]" style={delay(80)}>
            {hero.h1Main}
            {hero.h1Tail && (
              <>
                {" "}
                <span className="block"><span className="hl-under font-semibold text-blue-600">{hero.h1Tail}</span></span>
              </>
            )}
          </h1>

          <p className="hero-in hero-sub mt-4 max-w-xl text-base leading-relaxed text-ink/85 md:text-base lg:text-[0.95rem] xl:text-base" style={delay(220)}>
            <Txt highlight={hero.highlight}>{hero.sub}</Txt>
          </p>

          <ul className="hero-in my-10 flex flex-wrap items-center gap-y-4" style={delay(340)}>
            {hero.features.map((f, i) => (
              <li key={f.text} className="mr-4 flex items-center gap-2.5 border-navy/15 pr-4 last:mr-0 last:border-0 last:pr-0 sm:border-r xl:mr-5 xl:gap-3 xl:pr-5">
                <span className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${FEATURE_TONES[i % 3]}`}>
                  <Icon name={f.icon} className="h-6 w-6" />
                </span>
                <span className="max-w-[7.5rem] text-[13px] leading-snug text-navy/85 xl:text-sm">{f.text}</span>
              </li>
            ))}
          </ul>

          <div className="hero-in my-10 flex flex-col gap-3 sm:flex-row" style={delay(460)}>
            <ApplyButton lang={lang} size="lg" label={hero.ctaApply} where="hero" className="lg:px-5 lg:py-2.5 lg:text-sm" />
            <Link href={lp(lang, "/home-care")} className={`${btnClass("outline", "lg")} lg:px-5 lg:py-2.5 lg:text-sm`}>
              {hero.ctaHome}
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>

          <p className="hero-in mt-4 flex items-center gap-3 text-sm text-ink/80" style={delay(580)}>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy text-white">
              <Icon name="phone" className="h-4 w-4" />
            </span>
            <span>
              {ui.preferTalk}{" "}
              <a className="font-bold text-navy hover:underline" href={telHref} data-track="click_call" data-track-location="hero">
                {ui.call} {site.phoneDisplay}
              </a>
            </span>
          </p>
        </div>

      </div>

      {/* ---------------- RIGHT: halo + lab backdrop + portrait + emblem + floating cards (bleeds to the screen edge on desktop) ---------------- */}
      <div className="relative mx-auto aspect-[1/1] w-full max-w-[560px] lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:aspect-auto lg:h-full lg:w-[50%] lg:max-w-none">
          {/* <Image
            src="/images/hero-halo.webp"
            alt=""
            aria-hidden="true"
            width={540}
            height={431}
            sizes="(max-width: 1024px) 90vw, 640px"
            className="hero-fade absolute -right-[1%] top-[6%] w-[104%] max-w-none opacity-[0.1] lg:right-[2%] lg:top-[10%] lg:w-[84%]"
            style={delay(100)}
          /> */}
          <Image
            src="/images/hero-lab.webp"
            alt=""
            aria-hidden="true"
            width={640}
            height={427}
            sizes="(max-width: 1024px) 60vw, 400px"
            className="hero-fade absolute -right-[3%] bottom-0 w-[74%] max-w-none lg:w-[60%]"
            style={delay(250)}
          />
          <Image
            src={images.heroExecutive.src}
            alt={images.heroExecutive.alt}
            width={images.heroExecutive.w}
            height={images.heroExecutive.h}
            priority
            sizes="(max-width: 1024px) 85vw, 520px"
            className="hero-in-right absolute bottom-0 left-[10%] z-10 h-auto w-[82%] max-w-none lg:left-[7%] lg:h-[76%] lg:w-auto"
            style={delay(120)}
          />
          <div className="hero-pop absolute left-[1%] top-[24%] z-20 w-[40%] max-w-[270px] -lg:left-[10%] lg:top-[26%] lg:w-[27%]" style={delay(650)}>
            <Image
              src={images.heroEmblem.src}
              alt={images.heroEmblem.alt}
              width={images.heroEmblem.w}
              height={images.heroEmblem.h}
              sizes="(max-width: 1024px) 40vw, 260px"
              className="hero-float h-auto w-full drop-shadow-xl"
            />
          </div>

          <ul className="absolute right-[2.5%] top-[12%] z-20 hidden w-[205px] flex-col gap-2.5 xl:flex 2xl:w-[235px]">
            {hero.cards.map((card, i) => (
              <li
                key={card.text}
                className="hero-in-right flex items-center gap-2.5 rounded-2xl bg-white p-2.5 pr-3 shadow-card ring-1 ring-navy/5"
                style={delay(750 + i * 130)}
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-50 text-navy">
                  <Icon name={card.icon} className="h-6 w-6" />
                </span>
                <span className="text-[13px] font-medium leading-snug text-navy/85">{card.text}</span>
              </li>
            ))}
          </ul>
      </div>
    </section>
  );
}

/* 2. TRUST STRIP – full width, centred; titles never break across lines (English) ------------ */
export function TrustStrip({ lang }: { lang: Lang }) {
  const { trust, ui } = getContent(lang);
  return (
    <section aria-label={ui.trustLabel} className="border-y border-navy/10 bg-white">
      <ul className="mx-auto grid w-full max-w-[1600px] grid-cols-2 gap-x-3 gap-y-6 px-4 py-6 sm:flex sm:flex-wrap sm:items-center sm:justify-evenly sm:gap-x-8 sm:px-6 lg:px-10">
        {trust.map((t) => (
          <li key={t.title} className="flex flex-col items-center gap-2 text-center sm:flex-row sm:gap-3 sm:text-left">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mint text-brand-green-dark">
              <Icon name={t.icon} className="h-6 w-6" />
            </span>
            <span className="leading-tight">
              <span className={`block text-sm font-bold text-navy ${lang === "en" ? "whitespace-nowrap" : ""}`}>{t.title}</span>
              <span className="block max-w-[11rem] text-xs text-muted">{t.text}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* helper: colours the last N words of a heading */
function TitleAccent({ title, accent, words = 1 }: { title: string; accent: string; words?: number }) {
  const parts = title.split(" ");
  if (parts.length <= words) return <span className={accent}>{title}</span>;
  const head = parts.slice(0, parts.length - words).join(" ");
  const tail = parts.slice(parts.length - words).join(" ");
  return (
    <>
      {head} <span className={accent}>{tail}</span>
    </>
  );
}

/* 3. SKILLS – white section, glossy 3D tool icons, trainer artwork on the right ------------------ */
const SKILL_IMG: Record<string, { src: string; w: number; h: number }> = {
  "body-weight": { src: "/images/skill-weight.webp", w: 260, h: 177 },
  bmi: { src: "/images/skill-bmi.webp", w: 260, h: 236 },
  temperature: { src: "/images/skill-temp.webp", w: 260, h: 374 },
  spo2: { src: "/images/skill-spo2.webp", w: 260, h: 233 },
  "blood-sugar": { src: "/images/skill-sugar.webp", w: 260, h: 260 },
  haemoglobin: { src: "/images/skill-hb.webp", w: 260, h: 207 },
  "urine-testing": { src: "/images/skill-urine.webp", w: 260, h: 249 },
};
const SKILL_TONE = ["bg-emerald-100 text-emerald-600", "bg-emerald-100 text-emerald-600", "bg-red-100 text-brand-red", "bg-sky-100 text-sky-600", "bg-violet-100 text-violet-600", "bg-amber-100 text-amber-600", "bg-emerald-100 text-emerald-600"];

export function SkillsGrid({ lang, link = true }: { lang: Lang; link?: boolean }) {
  const { skills, homeSections, ui } = getContent(lang);
  return (
    <section id="skills" className="relative overflow-hidden bg-gradient-to-b from-white to-sky-50/50 pb-44 pt-12 md:pt-16 xl:pb-16">
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 bottom-4 h-[240px] w-[240px] rounded-full bg-emerald-100/60 sm:h-[320px] sm:w-[320px] xl:-right-24 xl:bottom-auto xl:top-24 xl:h-[560px] xl:w-[560px] xl:bg-emerald-100/50" />
      <div aria-hidden="true" className="dots pointer-events-none absolute right-[6%] top-8 h-14 w-24 sm:h-16 sm:w-28 xl:right-[15%] xl:top-10" />
      <Image
        src="/images/skills-trainer.webp"
        alt=""
        aria-hidden="true"
        width={612}
        height={408}
        sizes="(max-width: 640px) 210px, (max-width: 1280px) 270px, 470px"
        className="pointer-events-none absolute bottom-0 right-0 z-10 w-[210px] max-w-none sm:w-[270px] xl:w-[clamp(250px,24vw,470px)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div data-reveal className="mb-8 max-w-3xl">
          {homeSections.learnTa && <Ta as="p" className="mb-1 text-lg font-bold text-brand-red">{homeSections.learnTa}</Ta>}
          <h2 className="text-3xl font-extrabold text-navy md:text-4xl">
            <TitleAccent title={homeSections.learnTitle} accent="text-blue-600" />
          </h2>
          <span aria-hidden="true" className="mt-3 block h-1 w-14 rounded-full bg-gold" />
          <p className="mt-3 text-base text-muted md:text-lg">{homeSections.learnIntro}</p>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 ">
          {skills.map((sk, i) => {
            const img = SKILL_IMG[sk.slug];
            return (
              <li key={sk.slug}>
                <div
                  data-reveal
                  className="relative flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-3.5 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5"
                >
                  <div className="flex items-start justify-between gap-2">
                    {/* <span className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl sm:h-11 sm:w-11 ${SKILL_TONE[i % SKILL_TONE.length]}`}>
                      <Icon name={sk.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
                    </span> */}
                    {img && (
                      <Image src={img.src} alt="" aria-hidden="true" width={img.w} height={img.h} loading="lazy" sizes="140px" className="h-[84px] w-[50%] object-contain object-right mx-auto sm:h-[108px]" />
                    )}
                  </div>
                  <h3 className="mt-3 break-words text-sm font-extrabold leading-snug text-navy sm:text-base">{lang === "en" ? sk.en : sk.ta}</h3>
                  <p className="mt-1.5 break-words text-xs leading-snug text-muted sm:text-sm">{sk.what}</p>
                </div>
              </li>
            );
          })}
          {link && (
            <li>
              <Link
                href={lp(lang, "/academy/point-of-care-testing")}
                className="group flex h-full min-h-[200px] flex-col items-center justify-center gap-3 rounded-2xl border border-sky-200 bg-sky-50 p-4 text-center font-bold text-navy transition duration-300 hover:-translate-y-1 hover:bg-sky-100 hover:shadow-lg"
              >
                <Image src="/images/skill-syllabus.webp" alt="" aria-hidden="true" width={260} height={336} loading="lazy" sizes="110px" className="h-auto max-h-[96px] w-auto sm:max-h-[120px]" />
                <span className="text-sm sm:text-base">{ui.seeSyllabus}</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-blue-600 shadow transition group-hover:translate-x-1">
                  <Icon name="arrow" className="h-5 w-5" />
                </span>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}

/* 4. COURSES – light section with 3D artwork, stat strip inside each card ------------------- */
const COURSE_ICON: Record<string, string> = { "point-of-care-testing": "flask", "health-assistant-for-diabetics": "drop" };
const COURSE_TONE = ["bg-sky-100 text-sky-700", "bg-emerald-100 text-emerald-700"];

export function CourseCards({ lang, heading = true }: { lang: Lang; heading?: boolean }) {
  const { courses, homeSections, ui } = getContent(lang);
  return (
    <section id="courses" className="relative overflow-hidden bg-gradient-to-b from-white to-sky-50 pb-36 pt-12 sm:pb-40 md:pt-16 xl:pb-16">
      {/* decoration */}
      <Image src="/images/hero-halo.webp" alt="" aria-hidden="true" width={640} height={531} className="pointer-events-none absolute -right-20 -top-6 w-[280px] max-w-none opacity-30 sm:w-[380px] lg:-right-28 lg:-top-10 lg:w-[460px]" />
      <div aria-hidden="true" className="dots pointer-events-none absolute right-[4%] top-20 h-20 w-28 lg:right-[5%] lg:top-24 lg:h-28 lg:w-36" />
      <Image src="/images/section-books.webp" alt="" aria-hidden="true" width={520} height={347} className="pointer-events-none absolute bottom-0 left-0 w-[135px] max-w-none sm:w-[190px] xl:w-[clamp(125px,11.5vw,300px)]" />
      <Image src="/images/section-clipboard.webp" alt="" aria-hidden="true" width={560} height={373} className="pointer-events-none absolute bottom-0 right-0 w-[140px] max-w-none sm:w-[200px] xl:w-[clamp(135px,12.5vw,320px)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 xl:max-w-[1090px] 2xl:max-w-6xl">
        {heading && (
          <div data-reveal className="mb-8">
            {homeSections.coursesTa && <Ta as="p" className="mb-1 text-lg font-bold text-brand-red">{homeSections.coursesTa}</Ta>}
            <h2 className="text-3xl font-extrabold text-navy md:text-4xl">
              <TitleAccent title={homeSections.coursesTitle} accent="text-sky-600" />
            </h2>
            <span aria-hidden="true" className="mt-3 block h-1 w-14 rounded-full bg-gold" />
          </div>
        )}
        <div className="grid gap-6 lg:grid-cols-2">
          {Object.values(courses).map((c, idx) => (
            <Card key={c.slug} className="flex flex-col !p-6 md:!p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  {c.ta && <Ta as="p" className="text-sm font-bold text-brand-red">{c.ta}</Ta>}
                  <h3 className="text-xl font-extrabold text-navy md:text-2xl">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted md:text-base">{c.summary}</p>
                </div>
                <span className={`hidden h-16 w-16 shrink-0 items-center justify-center rounded-full sm:inline-flex ${COURSE_TONE[idx % 2]}`}>
                  <Icon name={COURSE_ICON[c.slug] ?? "flask"} className="h-8 w-8" />
                </span>
              </div>

              <dl className="mt-5 grid grid-cols-1 divide-y divide-navy/10 rounded-xl bg-mint/80 text-sm sm:grid-cols-[1fr_1.75fr_1fr] sm:divide-x sm:divide-y-0">
                <div className="flex items-center gap-3 px-4 py-3">
                  <Icon name="calendar" className="h-6 w-6 shrink-0 text-navy" />
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-wide text-muted">{ui.duration}</dt>
                    <dd className="font-bold text-navy"><Txt>{c.duration}</Txt></dd>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-4 py-3">
                  <Icon name="users" className="h-6 w-6 shrink-0 text-navy" />
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-wide text-muted">{ui.mode}</dt>
                    <dd className="font-bold leading-snug text-navy">{c.mode}</dd>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-4 py-3">
                  <Icon name="coins" className="h-6 w-6 shrink-0 text-navy" />
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-wide text-muted">{ui.fee}</dt>
                    <dd className="text-xl font-extrabold text-brand-red">{c.fee}</dd>
                  </div>
                </div>
              </dl>
              <p className="mt-2 text-xs"><Txt>{c.feeNote}</Txt></p>

              <div className="mt-5 flex flex-wrap gap-3">
                <ApplyButton lang={lang} label={ui.applyNow} message={c.apply} where={`course-${c.slug}`} />
                <Link href={lp(lang, c.href)} className={btnClass("outline")}>
                  {ui.courseDetails}
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 5. WHY THIS TRAINING – navy wave artwork, coloured icon cards ------------------------------ */
const WHY_TONE = ["bg-gold text-navy", "bg-blue-500 text-white", "bg-emerald-500 text-white", "bg-violet-500 text-white"];

export function WhyTraining({ lang }: { lang: Lang }) {
  const { whyTraining } = getContent(lang);
  return (
    <section id="why" className="bg-wave relative overflow-hidden py-12 text-white md:py-16">
      <div aria-hidden="true" className="dots dots-light pointer-events-none absolute bottom-10 left-[3%] hidden h-24 w-28 md:block" />
      <div aria-hidden="true" className="dots dots-light pointer-events-none absolute bottom-16 right-[3%] hidden h-24 w-28 md:block" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div data-reveal className="mb-8">
          {whyTraining.titleTa && <Ta as="p" className="mb-1 text-lg font-bold text-gold">{whyTraining.titleTa}</Ta>}
          <h2 className="text-3xl font-extrabold md:text-4xl">
            <TitleAccent title={whyTraining.title} accent="text-gold" />
          </h2>
          <span aria-hidden="true" className="mt-3 block h-1 w-14 rounded-full bg-gold" />
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {whyTraining.points.map((p, i) => (
            <li key={p.en} className="flex flex-col items-start gap-3 rounded-2xl border border-white/15 bg-navy-800/60 p-3.5 sm:flex-row sm:gap-4 sm:p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-navy-800/80">
              <span className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-lg ${WHY_TONE[i % 4]}`}>
                <Icon name={p.icon} className="h-6 w-6" />
              </span>
              <div>
                {p.ta && <Ta as="p" className="text-sm font-bold text-gold">{p.ta}</Ta>}
                <p className="break-words text-sm font-bold leading-snug sm:text-base">{p.en}</p>
                <p className="mt-1.5 break-words text-xs leading-snug text-white/75 sm:mt-2 sm:text-sm">{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* 6. ADMISSION IN 5 STEPS – cropped 3D step icons (number badge included), arrow connectors, nurse artwork ----- */
export function AdmissionSteps({ lang, detailsLink = true }: { lang: Lang; detailsLink?: boolean }) {
  const { admissionSteps, ui } = getContent(lang);
  return (
    <section id="steps" className="relative overflow-hidden bg-gradient-to-b from-white to-sky-50/60 pb-44 pt-12 md:pt-16 xl:pb-12">
      <Image src="/images/hero-halo.webp" alt="" aria-hidden="true" width={640} height={531} className="pointer-events-none absolute -right-24 bottom-0 w-[320px] max-w-none opacity-40 sm:w-[420px] xl:-right-32 xl:bottom-auto xl:top-4 xl:w-[520px]" />
      <div aria-hidden="true" className="dots pointer-events-none absolute right-[14%] top-24 hidden h-16 w-24 md:block" />
      <div aria-hidden="true" className="dots pointer-events-none absolute bottom-24 right-[9%] hidden h-20 w-24 xl:block" />
      <Image
        src="/images/steps-nurse.webp"
        alt=""
        aria-hidden="true"
        width={620}
        height={525}
        className="pointer-events-none absolute bottom-0 right-0 z-10 w-[180px] max-w-none sm:w-[230px] xl:w-[clamp(230px,19vw,420px)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4">
        <div data-reveal className="mb-8">
          {admissionSteps.titleTa && <Ta as="p" className="mb-1 text-lg font-bold text-brand-red">{admissionSteps.titleTa}</Ta>}
          <h2 className="text-3xl font-extrabold text-navy md:text-4xl">
            <TitleAccent title={admissionSteps.title} accent="text-blue-600" words={2} />
          </h2>
          <span aria-hidden="true" className="mt-3 block h-1 w-14 rounded-full bg-gold" />
        </div>

        <ol className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-5 lg:gap-7 ">
          {admissionSteps.steps.map((st, i) => (
            <li
              key={st.n}
              className="relative flex flex-col rounded-2xl border border-navy/10 bg-white p-3.5 shadow-card transition duration-300 last:col-span-2 hover:-translate-y-1 hover:shadow-lg sm:p-5 lg:last:col-span-1"
            >
              <div className="mx-auto -mt-1 h-[70px] w-full max-w-[70px]">
              <Image
                src={`/images/step-${st.n}.webp`}
                alt=""
                aria-hidden="true"
                width={200}
                height={200}
                className="mx-auto -mt-1 h-auto w-full max-w-[70px]"
                
              />
              </div>
              <span className="sr-only">{ui.stepWord} {st.n}: </span>
              {st.ta && <Ta as="p" className="mt-3 text-sm font-bold text-brand-green-dark">{st.ta}</Ta>}
              <h3 className="mt-3 break-words text-base font-bold leading-snug text-navy sm:min-h-[2.9rem] sm:text-lg">{st.en}</h3>
              <p className="mt-1.5 break-words text-xs leading-snug text-muted sm:text-sm">{st.text}</p>
              {i < admissionSteps.steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-[22px] top-[44%] z-20 hidden h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-blue-600 text-white shadow-md lg:flex"
                >
                  <Icon name="arrow" className="h-4 w-4" />
                </span>
              )}
            </li>
          ))}
        </ol>

        <div className="relative z-20 mt-8 flex flex-col gap-3 sm:flex-row">
          <ApplyButton lang={lang} size="lg" where="steps" />
          {detailsLink && (
            <Link href={lp(lang, "/admissions")} className={btnClass("outline", "lg")}>
              {ui.feesDetails}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

/* 7. FOUNDER – uses the supplied professional portrait ------------------------------------- */
export function FounderPreview({ lang }: { lang: Lang }) {
  const { founder, images, ui } = getContent(lang);
  return (
    <Section bg="mint" id="founder">
      <div className="grid items-center gap-8 md:grid-cols-[0.8fr_1.4fr] lg:gap-12">
        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div aria-hidden="true" className="absolute -inset-4 rounded-[2rem] bg-sky-100" />
          <div aria-hidden="true" className="absolute -bottom-3 -right-3 left-3 top-3 rounded-2xl bg-gold/40" />
          <Photo img={images.founderPortrait} sizes="(max-width: 768px) 80vw, 380px" className="relative aspect-[4/5] shadow-card" />
          <Image
            src={images.heroEmblem.src}
            alt={images.heroEmblem.alt}
            width={images.heroEmblem.w}
            height={images.heroEmblem.h}
            loading="lazy"
            sizes="(max-width: 768px) 40vw, 190px"
            className="hero-float absolute -bottom-5 -right-3 z-10 h-auto w-[46%] max-w-[210px] drop-shadow-xl sm:-right-6 sm:-bottom-7"
          />
        </div>
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
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
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
    <Section bg="mint" id="legacy">
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
      <p className="-mt-4 mb-6 text-sm">
        <Txt>{homeSections.testimonialsNote}</Txt>
      </p>
      {testimonials.length > 0 && (
        <TestimonialSlider labels={{ prev: ui.prevSlide, next: ui.nextSlide, region: homeSections.testimonialsTitle }}>
          {testimonials.map((t) => (
            <li key={t.name + t.quote.slice(0, 12)} className="w-[78%] shrink-0 snap-start sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]">
              <TestimonialCard t={t} />
            </li>
          ))}
        </TestimonialSlider>
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
