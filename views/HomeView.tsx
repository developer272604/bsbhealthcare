import { FaqSection } from "@/components/FaqSection";
import { Gallery } from "@/components/Gallery";
import {
  AdmissionSteps,
  CourseCards,
  DiabetesBand,
  FinalCta,
  FounderPreview,
  HomeCareCards,
  HomeHero,
  LegacyPreview,
  SkillsGrid,
  Testimonials,
  TrustStrip,
  WhyTraining,
} from "@/components/HomeSections";
import { JsonLd } from "@/components/JsonLd";
import { QuickAnswer } from "@/components/QuickAnswer";
import { Section, SectionHeading } from "@/components/Section";
import { getContent, type Lang } from "@/lib/i18n";
import { pageSchema } from "@/lib/schema";

export function HomeView({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const entry = c.seo["/"];
  return (
    <>
      <HomeHero lang={lang} />
      <TrustStrip lang={lang} />
      <QuickAnswer label={c.ui.inShort} text={entry.answer ?? entry.description} />
      <SkillsGrid lang={lang} />
      <WhyTraining lang={lang} />
      <CourseCards lang={lang} />
      <FounderPreview lang={lang} />
      <HomeCareCards lang={lang} />
      <AdmissionSteps lang={lang} />
      {/* <DiabetesBand lang={lang} /> */}
      <LegacyPreview lang={lang} />
      <Section id="gallery">
        <SectionHeading title={c.homeSections.galleryTitle} ta={c.homeSections.galleryTa} intro={c.homeSections.galleryIntro} />
        <Gallery items={c.gallery} labels={c.ui.gallery} />
      </Section>
      <Testimonials lang={lang} />
      <FaqSection lang={lang} faqs={c.homeFaqs} title={c.homeSections.faqTitle} ta={c.homeSections.faqTa} bg="mint" />
      <FinalCta lang={lang} />
      <JsonLd data={pageSchema(lang, "/", { name: entry.title, description: entry.answer ?? entry.description })} />
    </>
  );
}
