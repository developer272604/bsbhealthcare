// SEO audit for every page in BOTH languages:
//  - unique title (<=60 chars) & description (<=155 chars), mentions Chennai / Tamil Nadu (சென்னை / தமிழ்நாடு)
//  - keywords present, quick-answer (AEO) present on content pages, no [CONFIRM] markers, no "guaranteed" wording
//   npm run check:seo
import { seo as seoEn } from "../lib/content";
import { seo as seoTa } from "../lib/content.ta";

let problems = 0;
for (const [lang, seo, place] of [
  ["en", seoEn, /chennai|tamil nadu/i],
  ["ta", seoTa, /சென்னை|தமிழ்நாடு/],
] as const) {
  console.log(`\n== ${lang.toUpperCase()} ==`);
  const titles = new Set<string>();
  const descs = new Set<string>();
  for (const [path, e] of Object.entries(seo)) {
    const issues: string[] = [];
    const len = (s: string) => [...s].length;
    if (len(e.title) > 60) issues.push(`title ${len(e.title)} chars (max 60)`);
    if (len(e.description) > 155) issues.push(`description ${len(e.description)} chars (max 155)`);
    if (len(e.description) < 70) issues.push(`description is short (${len(e.description)})`);
    if (titles.has(e.title)) issues.push("duplicate title");
    if (descs.has(e.description)) issues.push("duplicate description");
    if (!place.test(e.title + e.description)) issues.push("missing Chennai / Tamil Nadu");
    if (!e.keywords?.length) issues.push("no keywords");
    const legal = e.og === "legal";
    if (!legal && !e.answer) issues.push("missing AEO quick answer");
    if (e.answer && (len(e.answer) < 120 || len(e.answer) > 520)) issues.push(`answer length ${len(e.answer)} (aim 120–520)`);
    if (/\[CONFIRM/.test(e.title + e.description + (e.answer ?? ""))) issues.push("contains [CONFIRM]");
    if (/guarantee|உறுதியான வேலை/i.test(e.title + e.description + (e.answer ?? ""))) issues.push('contains "guarantee"');
    titles.add(e.title);
    descs.add(e.description);
    if (issues.length) {
      problems++;
      console.log(`✗ ${path}\n    ${issues.join("\n    ")}`);
    } else {
      console.log(`✓ ${path.padEnd(46)} title ${String(len(e.title)).padStart(2)} · desc ${String(len(e.description)).padStart(3)} · kw ${e.keywords.length}`);
    }
  }
}
console.log(problems ? `\n${problems} entries need fixes` : "\nAll SEO metadata passes (EN + TA)");
process.exit(problems ? 1 : 0);
