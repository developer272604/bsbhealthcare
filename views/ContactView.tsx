import { CallButton, WhatsAppButton } from "@/components/ActionLinks";
import { Card } from "@/components/Card";
import { GoogleMap } from "@/components/GoogleMap";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { QuickAnswer } from "@/components/QuickAnswer";
import { Section, SectionHeading } from "@/components/Section";
import { Txt } from "@/components/Txt";
import { WhatsAppForm } from "@/components/WhatsAppForm";
import { site } from "@/lib/content";
import { getContent, type Lang } from "@/lib/i18n";
import { pageSchema } from "@/lib/schema";
import { fullAddress, telHref } from "@/lib/utils";

function Row({ icon, label, children }: { icon: string; label: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mint text-brand-green-dark">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <div>
        <p className="text-sm font-bold text-navy">{label}</p>
        <div className="text-muted">{children}</div>
      </div>
    </li>
  );
}

export function ContactView({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const { contact, areasServed, areasConfirm, disclaimers, ui, waMessages } = c;
  const entry = c.seo["/contact"];
  return (
    <>
      <PageHero lang={lang} trail={[{ name: ui.navContact, path: "/contact" }]} h1={contact.h1} ta={contact.ta} intro={contact.intro}>
        <CallButton lang={lang} size="lg" variant="red" where="contact-hero" />
        <WhatsAppButton lang={lang} size="lg" message={waMessages.contact} where="contact-hero" />
      </PageHero>
      <QuickAnswer label={ui.inShort} text={entry.answer ?? entry.description} />

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading title={ui.getInTouch} />
            <ul className="space-y-5">
              <Row icon="phone" label={ui.phoneWhatsApp}>
                <a className="font-semibold text-navy underline" href={telHref} data-track="click_call" data-track-location="contact-details">
                  {site.phoneDisplay}
                </a>
              </Row>
              <Row icon="mail" label={ui.emailLabelPlain}>
                <a className="font-semibold text-navy underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </Row>
              <Row icon="map" label={ui.address}>
                {fullAddress()}
                <br />
                <Txt>{site.address.confirm}</Txt>
              </Row>
              <Row icon="clock" label={ui.hours}>
                {c.site.hours.display} <Txt>{site.hours.confirm}</Txt>
              </Row>
              <Row icon="home" label={ui.homeCareAreas}>
                {areasServed.join(", ")} <Txt>{areasConfirm}</Txt>
              </Row>
            </ul>
            <div className="mt-6 rounded-xl bg-brand-red/10 p-4 text-sm font-semibold text-brand-red-dark">{disclaimers.emergency}</div>
          </div>

          <Card>
            <h2 className="text-xl font-extrabold text-navy">{ui.sendEnquiry}</h2>
            <p className="mb-4 mt-1 text-sm text-muted">{ui.enquiryIntro}</p>
            <WhatsAppForm
              heading={ui.enquiryHeading}
              submitLabel={ui.sendOnWhatsApp}
              event="click_whatsapp"
              where="contact-form"
              whatsappNumber={site.whatsappNumber}
              labels={ui.formLabels}
              fields={[
                { name: "name", label: ui.name, required: true },
                { name: "phone", label: ui.mobileNumber, type: "tel", required: true, placeholder: ui.tenDigit },
                { name: "need", label: ui.iNeed, type: "select", required: true, options: contact.needs },
                { name: "area", label: ui.areaInChennai, placeholder: ui.areaHint },
                { name: "message", label: ui.message, type: "textarea" },
              ]}
            />
          </Card>
        </div>
      </Section>

      <Section bg="mint" id="location">
        <SectionHeading title={contact.directionsTitle} intro={contact.directions} />
        <GoogleMap title={ui.mapTitle} />
        <p className="mt-3 text-sm">
          <a className="font-semibold text-navy underline" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
            {ui.openInMaps}
          </a>
        </p>
      </Section>
      <JsonLd data={pageSchema(lang, "/contact", { type: "ContactPage", name: entry.title, description: entry.answer ?? entry.description })} />
    </>
  );
}
