import { Analytics } from "@/components/Analytics";
import { DeferredFonts } from "@/components/DeferredFonts";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { ScrollEffects } from "@/components/ScrollEffects";
import { FloatingWhatsApp } from "@/components/StickyActions";
import { site } from "@/lib/content";
import { getContent, htmlLang, type Lang } from "@/lib/i18n";
import { sitewideSchema } from "@/lib/schema";
import "@/app/globals.css";

/** <html> + shared chrome for both language trees. `fontClass` is applied immediately, `deferredFontClass` after page load. */
export function RootShell({
  lang,
  fontClass,
  deferredFontClass,
  children,
}: {
  lang: Lang;
  fontClass?: string;
  deferredFontClass?: string;
  children: React.ReactNode;
}) {
  const { ui } = getContent(lang);
  return (
    <html lang={htmlLang[lang]} className={fontClass}>
      <body>
        <ScrollEffects />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[70] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:font-bold focus:text-navy"
        >
          {ui.skip}
        </a>
        <Header lang={lang} />
        <main id="main">{children}</main>
        <Footer lang={lang} />
        <FloatingWhatsApp lang={lang} />
        <JsonLd data={sitewideSchema(lang)} />
        <Analytics gaId={site.ga4Id} />
        {deferredFontClass && <DeferredFonts classNames={deferredFontClass} />}
      </body>
    </html>
  );
}
