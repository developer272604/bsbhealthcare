import Image from "next/image";
import Link from "next/link";
import { images, site } from "@/lib/content";
import { getContent, lp, type Lang } from "@/lib/i18n";
import { fullAddress, telHref, waLink } from "@/lib/utils";
import { LangSwitch } from "./LangSwitch";
import { Ta, Txt } from "./Txt";

function Col({ title, links, lang }: { title: string; links: { label: string; href: string }[]; lang: Lang }) {
  return (
    <div>
      <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-gold">{title}</h2>
      <ul className="space-y-1">
        {links.map((l) => (
          <li key={l.href + l.label}>
            <Link href={lp(lang, l.href)} className="inline-flex min-h-8 items-center text-sm text-white/85 underline-offset-4 hover:text-white hover:underline">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const { ui, footerLinks, disclaimers } = c;
  return (
    <footer className="bg-navy-800 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Image src={images.logo.src} alt={c.images.logo.alt} width={images.logo.w} height={images.logo.h} loading="lazy" sizes="200px" className="h-12 w-auto" />
            <p className="mt-3 text-sm font-bold text-gold">{c.site.tagline}</p>
            {lang === "en" && c.site.taglineTa && (
              <Ta as="p" className="text-sm text-white/85">
                {c.site.taglineTa}
              </Ta>
            )}
            <address className="mt-4 space-y-1.5 text-sm not-italic text-white/85">
              <p>
                {fullAddress()}
                <br />
                <span className="text-white/70">
                  <Txt>{site.address.confirm}</Txt>
                </span>
              </p>
              <p>
                {ui.phoneLabel}{" "}
                <a href={telHref} data-track="click_call" data-track-location="footer" className="font-semibold underline-offset-4 hover:underline">
                  {site.phoneDisplay}
                </a>
              </p>
              <p>
                {ui.emailLabel}{" "}
                <a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline">
                  {site.email}
                </a>
              </p>
              <p>
                {ui.hoursLabel} {c.site.hours.display} <Txt>{site.hours.confirm}</Txt>
              </p>
            </address>
            <p className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <a href={waLink(c.waMessages.general)} target="_blank" rel="noopener noreferrer" data-track="click_whatsapp" data-track-location="footer" className="underline-offset-4 hover:underline">
                WhatsApp
              </a>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
                Facebook
              </a>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
                Google Maps
              </a>
            </p>
            <div className="mt-4">
              <LangSwitch lang={lang} ariaLabel={ui.language} />
            </div>
          </div>
          <Col lang={lang} title={ui.footerAcademy} links={footerLinks.academy} />
          <Col lang={lang} title={ui.footerHomeCare} links={footerLinks.homeCare} />
          <div className="space-y-8">
            <Col lang={lang} title={ui.footerCompany} links={footerLinks.company} />
            <Col lang={lang} title={ui.footerLegal} links={footerLinks.legal} />
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-white/15 bg-white/5 p-4 text-sm">
          <p className="font-bold">
            {disclaimers.emergency}
            {disclaimers.emergencyTa && lang === "en" && (
              <>
                {" "}
                <Ta className="font-normal text-white/85">{disclaimers.emergencyTa}</Ta>
              </>
            )}
          </p>
          <p className="mt-2 text-white/75">{disclaimers.medical}</p>
        </div>

        <p className="mt-6 text-center text-xs text-white/70">
          © {new Date().getFullYear()} {site.name}. {ui.rights}
        </p>
      </div>
    </footer>
  );
}
