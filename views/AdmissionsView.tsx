import Link from "next/link";
import { WhatsAppButton } from "@/components/ActionLinks";
import { Card, CheckList } from "@/components/Card";
import { CtaBand } from "@/components/CtaBand";
import { AdmissionSteps } from "@/components/HomeSections";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { QuickAnswer } from "@/components/QuickAnswer";
import { Section, SectionHeading } from "@/components/Section";
import { Ta, Txt } from "@/components/Txt";
import { WhatsAppForm } from "@/components/WhatsAppForm";
import { site } from "@/lib/content";
import { getContent, lp, type Lang } from "@/lib/i18n";
import { howToSchema, pageSchema } from "@/lib/schema";

export function AdmissionsView({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const { admissions: a, bankLoan, courses, ui, waMessages, admissionSteps } = c;
  const entry = c.seo["/admissions"];
  return (
    <>
      <PageHero lang={lang} trail={[{ name: ui.navAdmissions, path: "/admissions" }]} h1={a.h1} ta={a.ta} intro={a.intro} />
      <QuickAnswer label={ui.inShort} text={entry.answer ?? entry.description} />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-xl font-extrabold text-navy">{a.eligibility.title}</h2>
            <CheckList items={a.eligibility.points} className="mt-3" />
          </Card>
          <Card>
            <h2 className="text-xl font-extrabold text-navy">{a.documents.title}</h2>
            <CheckList items={a.documents.points} className="mt-3" />
          </Card>
        </div>
      </Section>

      <Section bg="mint">
        <SectionHeading title={a.feeTable.title} />
        <div data-reveal className="overflow-x-auto rounded-2xl border border-navy/10 bg-white shadow-card">
          <table className="w-full min-w-[34rem] text-left text-sm md:text-base">
            <caption className="sr-only">{a.feeTable.caption}</caption>
            <thead className="bg-navy text-white">
              <tr>
                {a.feeTable.headers.map((h) => (
                  <th key={h} scope="col" className="px-4 py-3 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {a.feeTable.rows.map((r) => (
                <tr key={r[0]} className="border-t border-navy/10">
                  {r.map((cell, i) =>
                    i === 0 ? (
                      <th key={i} scope="row" className="px-4 py-3 font-bold text-navy">
                        {cell}
                      </th>
                    ) : (
                      <td key={i} className={`px-4 py-3 ${i === 3 ? "font-extrabold text-brand-red" : ""}`}>
                        <Txt>{cell}</Txt>
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="mt-3 space-y-1 text-sm">
          {a.feeTable.confirm.map((x) => (
            <li key={x}>
              <Txt>{x}</Txt>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted">
          {ui.feeDetailsFor}{" "}
          <Link className="font-semibold text-navy underline" href={lp(lang, courses.poct.href)}>
            {courses.poct.title}
          </Link>{" "}
          ·{" "}
          <Link className="font-semibold text-navy underline" href={lp(lang, courses.diabetic.href)}>
            {courses.diabetic.title}
          </Link>
        </p>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <h2 className="text-lg font-extrabold text-navy">{a.included.title}</h2>
            <CheckList items={a.included.points} className="mt-3 text-sm" />
          </Card>
          <Card>
            <h2 className="text-lg font-extrabold text-navy">{a.payment.title}</h2>
            <p className="mt-3 text-sm text-muted">
              <Txt>{a.payment.text}</Txt>
            </p>
          </Card>
          <Card>
            <h2 className="text-lg font-extrabold text-navy">{a.batches.title}</h2>
            <p className="mt-3 text-sm text-muted">
              <Txt>{a.batches.text}</Txt>
            </p>
          </Card>
        </div>
        {/* Bank loan block – hidden until a lender is confirmed (see bankLoan in lib/content.ts) */}
        {bankLoan.enabled && (
          <Card className="mt-6">
            <h2 className="text-xl font-extrabold text-navy">{a.loanTitle}</h2>
            <p className="mt-2 text-muted">
              {bankLoan.lender} · {bankLoan.amount} · {bankLoan.conditions}
            </p>
          </Card>
        )}
        <p className="mt-6 text-sm">
          {a.refundNote}{" "}
          <Link href={lp(lang, "/refund-policy")} className="font-semibold text-navy underline">
            {ui.readRefund}
          </Link>
        </p>
      </Section>

      <AdmissionSteps lang={lang} detailsLink={false} />

      <Section bg="mint" id="apply">
        <div className="mx-auto max-w-xl">
          <SectionHeading title={a.form.title} ta={a.form.ta} intro={a.form.text} />
          <Card>
            <WhatsAppForm
              heading={ui.applicationHeading}
              submitLabel={ui.applyOnWhatsApp}
              event="click_apply"
              where="admissions-form"
              whatsappNumber={site.whatsappNumber}
              labels={ui.formLabels}
              fields={[
                { name: "name", label: ui.fullName, required: true },
                { name: "phone", label: ui.mobileNumber, type: "tel", required: true, placeholder: ui.tenDigit },
                { name: "course", label: ui.course, type: "select", required: true, options: [courses.poct.title, courses.diabetic.title] },
                { name: "qualification", label: ui.qualification, placeholder: ui.qualificationHint, required: true },
              ]}
            />
          </Card>
          <div className="mt-4 text-center">
            <p className="text-sm text-muted">{ui.noFormTa}</p>
            <WhatsAppButton lang={lang} className="mt-2" message={waMessages.apply} label={ui.messageDirectly} where="admissions-direct" />
          </div>
        </div>
      </Section>

      <CtaBand lang={lang} title={a.ctaTitle} text={a.ctaText} showApply />
      <JsonLd data={howToSchema(lang, admissionSteps.title, entry.answer ?? entry.description, admissionSteps.steps.map((s) => ({ title: s.en, text: s.text })), "/admissions")} />
      <JsonLd data={pageSchema(lang, "/admissions", { name: entry.title, description: entry.answer ?? entry.description })} />
    </>
  );
}
