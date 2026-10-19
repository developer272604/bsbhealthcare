import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Txt } from "@/components/Txt";
import { getContent, type Lang } from "@/lib/i18n";
import { pageSchema } from "@/lib/schema";

/** Shared layout for the privacy / terms / refund pages. */
export function LegalView({ lang, kind, path }: { lang: Lang; kind: "privacy" | "terms" | "refund"; path: string }) {
  const c = getContent(lang);
  const data = c.legal[kind];
  const entry = c.seo[path];
  return (
    <>
      <PageHero lang={lang} trail={[{ name: data.h1, path }]} h1={data.h1} />
      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-muted">
            {c.ui.lastUpdated} <Txt>{data.updated}</Txt>
          </p>
          <p className="mt-4 text-lg text-ink">
            <Txt>{data.intro}</Txt>
          </p>
          {data.sections.map((s) => (
            <section key={s.heading} id={s.id} className="mt-8">
              <h2 className="text-xl font-extrabold text-navy">{s.heading}</h2>
              {s.body.map((b) => (
                <p key={b} className="mt-2 text-muted">
                  <Txt>{b}</Txt>
                </p>
              ))}
            </section>
          ))}
        </div>
      </Section>
      <JsonLd data={pageSchema(lang, path, { name: entry.title, description: entry.description })} />
    </>
  );
}
