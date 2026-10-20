import { site, founderInfo } from "./content";
import { getContent, type Lang } from "./i18n";
import { absUrl, fullAddress, stripConfirm } from "./utils";

const clean = (s: string) => stripConfirm(s).replace(/\s+/g, " ").trim();

/** /llms.txt – llmstxt.org format: concise, link-rich summary for AI assistants. */
export function buildLlmsTxt(): string {
  const en = getContent("en");
  const link = (title: string, path: string, desc: string, lang: Lang = "en") => `- [${title}](${absUrl(path, lang)}): ${clean(desc)}`;
  const s = en.seo;

  return `# ${site.name}

> ${clean(s["/"].answer ?? s["/"].description)}

Facts: ${site.academyName} (training) and ${site.homeCareName} (home health care) in Chennai, Tamil Nadu, India. Founder: ${founderInfo.name}. Phone / WhatsApp: ${site.phoneDisplay}. Address: ${fullAddress()}. Hours: ${en.site.hours.display}. Languages: Tamil and English (every page exists in both).

## Training (BSB Health Skills Academy)
${link("Academy overview", "/academy", s["/academy"].answer ?? "")}
${link(en.courses.poct.full, en.courses.poct.href, s["/academy/point-of-care-testing"].answer ?? "")}
${link(en.courses.diabetic.full, en.courses.diabetic.href, s["/academy/health-assistant-for-diabetics"].answer ?? "")}
${link("Admissions, fees and how to apply", "/admissions", s["/admissions"].answer ?? "")}

## Home health care (BSB Home Health Care)
${link("Home care overview", "/home-care", s["/home-care"].answer ?? "")}
${en.homeCare.services.map((x) => link(x.h1, x.href, s[x.href].answer ?? "")).join("\n")}
${link("Complete Diabetic Care – the 7 pillars", "/diabetes-care", s["/diabetes-care"].answer ?? "")}

## About
${link("About M.R. Balachandran, legacy and portfolio", "/about", s["/about"].answer ?? "")}
${link("Contact, address and map", "/contact", s["/contact"].answer ?? "")}

## தமிழ் (Tamil version of every page)
${link("முகப்பு – Tamil home page", "/", "Tamil version of the whole site", "ta")}
${link("Tamil sitemap and alternates", "/sitemap.xml", "XML sitemap with en-IN / ta-IN hreflang alternates", "en")}

## Optional
- [Full plain-text site content for LLMs](${site.url}/llms-full.txt): every course, service, FAQ and policy in one file
- [Privacy policy](${absUrl("/privacy-policy")}) · [Terms & medical disclaimer](${absUrl("/terms")}) · [Refund policy](${absUrl("/refund-policy")})
`;
}

/** /llms-full.txt – the whole site as clean plain text, English then Tamil. */
export function buildLlmsFull(): string {
  const parts: string[] = [`# ${site.name} – full content for AI assistants\n`];
  for (const lang of ["en", "ta"] as Lang[]) {
    const c = getContent(lang);
    const u = (p: string) => absUrl(p, lang);
    const L: string[] = [];
    L.push(`\n=====  ${lang === "en" ? "ENGLISH" : "TAMIL / தமிழ்"}  =====\n`);
    L.push(`## ${c.hero.h1}\n${clean(c.hero.sub)}\n${u("/")}\n`);
    L.push(`### ${lang === "en" ? "Business details" : "வணிக விவரங்கள்"}\n- ${site.name}\n- ${fullAddress()}\n- ${site.phoneDisplay} (${lang === "en" ? "phone & WhatsApp" : "தொலைபேசி & WhatsApp"})\n- ${site.email}\n- ${c.site.hours.display}\n- ${c.site.mission}\n`);

    L.push(`### ${c.ui.navAcademy}\n${clean(c.academy.h1)}\n${c.academy.intro.map(clean).join("\n")}\n`);
    for (const k of Object.values(c.courses)) {
      L.push(`#### ${k.full}\n${clean(k.summary)}\n- ${c.ui.duration}: ${clean(k.duration) || "—"}\n- ${c.ui.mode}: ${clean(k.mode)}\n- ${c.ui.fee}: ${k.fee}\n${u(k.href)}\n`);
    }
    L.push(`#### ${c.poctPage.modulesTitle}\n${c.skills.map((s) => `- ${lang === "en" ? s.en : s.ta}: ${clean(s.what)} ${clean(s.why)}`).join("\n")}\n`);
    L.push(`#### ${c.haPage.syllabusTitle}\n${c.haPage.syllabus.map((s) => `- ${s.title}: ${clean(s.text)}`).join("\n")}\n${clean(c.haPage.scope)}\n`);
    L.push(`#### ${c.admissions.h1}\n${clean(c.admissions.intro)}\n${c.admissions.eligibility.points.map((p) => `- ${clean(p)}`).join("\n")}\n${c.admissions.documents.points.map((p) => `- ${clean(p)}`).join("\n")}\n${u("/admissions")}\n`);
    L.push(`#### ${c.admissionSteps.title}\n${c.admissionSteps.steps.map((s) => `${s.n}. ${s.en}: ${clean(s.text)}`).join("\n")}\n${clean(c.disclaimers.placement)}\n`);

    L.push(`### ${c.ui.navHomeCare}\n${clean(c.homeCare.overview.intro)}\n${c.areasServed.map((a) => `- ${a}`).join("\n")}\n`);
    for (const s of c.homeCare.services) {
      L.push(`#### ${s.h1}\n${clean(s.intro)}\n${s.included.map((i) => `- ${clean(i)}`).join("\n")}\n${s.steps.map((st, i) => `${i + 1}. ${st.title}: ${clean(st.text)}`).join("\n")}\n${s.faqs.map((f) => `Q: ${clean(f.q)}\nA: ${clean(f.a)}`).join("\n")}\n${u(s.href)}\n`);
    }

    L.push(`### ${c.diabetesCare.h1}\n${clean(c.diabetesCare.intro)}\n${clean(c.diabetesCare.context.text)}\n`);
    for (const p of c.diabetesCare.pillars) L.push(`#### ${p.title}\n${clean(p.text)}\n`);
    L.push(`#### ${c.diabetesCare.warning.title}\n${[c.diabetesCare.warning.low, c.diabetesCare.warning.high].map((w) => `${w.title}: ${w.signs.map(clean).join("; ")}. ${clean(w.action)}`).join("\n")}\n${u("/diabetes-care")}\n`);

    L.push(`### ${c.about.h1}\n${clean(c.about.intro)}\n${clean(c.about.experience.title)}: ${c.about.experience.items.map((i) => `${i.value} – ${i.label}`).join("; ")}\n${c.about.philosophy.points.map((p) => `- ${p.title}: ${clean(p.text)}`).join("\n")}\n${u("/about")}\n`);

    L.push(`### ${c.homeSections.faqTitle}\n${c.homeFaqs.map((f) => `Q: ${clean(f.q)}\nA: ${clean(f.a)}`).join("\n")}\n`);
    L.push(`### ${lang === "en" ? "Medical disclaimer" : "மருத்துவ மறுப்பு அறிவிப்பு"}\n${clean(c.disclaimers.medical)} ${clean(c.disclaimers.supplements)}\n`);
    parts.push(L.join("\n"));
  }
  return parts.join("\n");
}
