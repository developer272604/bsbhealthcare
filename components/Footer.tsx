import Image from "next/image";
import Link from "next/link";
import { images, site } from "@/lib/content";
import { getContent, lp, type Lang } from "@/lib/i18n";
import { fullAddress, telHref, waLink } from "@/lib/utils";
import { FacebookIcon, Icon, InstagramIcon, WhatsAppIcon } from "./Icon";
import { Txt } from "./Txt";

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

function ContactRow({ icon, label, children }: { icon: string; label: string; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold">
        <Icon name={icon} className="h-4 w-4" />
      </span>
      <span className="pt-1">
        <span className="sr-only">{label}: </span>
        {children}
      </span>
    </li>
  );
}

const social =
  "inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition duration-200 hover:-translate-y-0.5 hover:bg-gold hover:text-navy";

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

            <ul className="mt-5 space-y-3 text-sm text-white/90">
              <ContactRow icon="map" label={ui.address}>
                {fullAddress()}
                <br />
                <span className="text-white/70">
                  <Txt>{site.address.confirm}</Txt>
                </span>
              </ContactRow>
              <ContactRow icon="phone" label={ui.phoneLabel}>
                <a href={telHref} data-track="click_call" data-track-location="footer" className="font-semibold underline-offset-4 hover:underline">
                  {site.phoneDisplay}
                </a>
              </ContactRow>
              <ContactRow icon="mail" label={ui.emailLabel}>
                <a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline">
                  {site.email}
                </a>
              </ContactRow>
              <ContactRow icon="clock" label={ui.hoursLabel}>
                {c.site.hours.display} <Txt>{site.hours.confirm}</Txt>
              </ContactRow>
            </ul>

            <ul className="mt-5 flex flex-wrap items-center gap-3" aria-label="Social">
              <li>
                <a
                  href={waLink(c.waMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="click_whatsapp"
                  data-track-location="footer"
                  aria-label="WhatsApp"
                  className={social}
                >
                  <WhatsAppIcon className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={social}>
                  <FacebookIcon className="h-5 w-5" />
                </a>
              </li>
              {site.instagram && (
                <li>
                  <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={social}>
                    <InstagramIcon className="h-5 w-5" />
                  </a>
                </li>
              )}
              <li>
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" aria-label={ui.openInMaps} className={social}>
                  <Icon name="map" className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
          <Col lang={lang} title={ui.footerAcademy} links={footerLinks.academy} />
          <Col lang={lang} title={ui.footerHomeCare} links={footerLinks.homeCare} />
          <div className="space-y-8">
            <Col lang={lang} title={ui.footerCompany} links={footerLinks.company} />
            <Col lang={lang} title={ui.footerLegal} links={footerLinks.legal} />
          </div>
        </div>

        <p className="mt-10 rounded-xl border border-white/15 bg-white/5 p-4 text-sm text-white/75">{disclaimers.medical}</p>

        <p className="mt-6 text-center text-xs text-white/70">
          © {new Date().getFullYear()} {site.name}. {ui.rights}
        </p>
      </div>
    </footer>
  );
}
