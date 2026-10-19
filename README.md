# BSB Health Care – Chennai · Website

Bilingual (**English + தமிழ்**), SEO / AEO-optimised website for **BSB Health Skills Academy** (Point-of-Care Testing & Health Assistant for Diabetics training) and **BSB Home Health Care** (blood tests, nursing, physiotherapy, doctor visits, diabetic diet) in Chennai.

**Stack:** Next.js 15 (App Router, TypeScript) · Tailwind CSS v4 · `next/font` (Inter + Noto Sans Tamil) · `next/image` · every page statically generated · no CMS, no database. Forms open WhatsApp with a pre-filled message.

---

## 1. Quick start

```bash
npm install
npm run placeholders      # creates placeholder photos with the exact filenames (never overwrites real photos)
npm run dev               # http://localhost:3000   (Tamil: http://localhost:3000/ta)
```

| Command | What it does |
|---|---|
| `npm run build` / `npm start` | Production build (53 static routes) and local server |
| `npm run typecheck` | TypeScript check (also proves the Tamil file has the same shape as the English one) |
| `npm run check:seo` | Audits every page **in both languages**: unique title ≤ 60, description ≤ 155, mentions Chennai, keywords, AEO answer, no `[CONFIRM]` |
| `npm run confirm:list` | Lists every `[CONFIRM]` marker still in the code |
| `npm run check:launch` | Same list, but **fails** while any marker remains – run before go-live |

> The build downloads Inter and Noto Sans Tamil from Google Fonts, so it needs internet (Vercel has it). If a build fails once with a `next/font` error, simply re-run it.
>
> **Windows + OneDrive:** keep the project **outside** OneDrive (e.g. `C:\dev\bsbhealthcare`). OneDrive turns files in `.next` into cloud placeholders and `next dev` then fails with `EINVAL … readlink`. Fix: delete `.next` and move the folder.

Environment variables (copy `.env.example` → `.env.local`):

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Final domain, e.g. `https://www.bsbhealthcare.in` – canonicals, sitemap, hreflang, Open Graph, schema, llms.txt |
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID (`G-XXXXXXXXXX`). Empty = analytics off |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` / `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Optional search-console verification tokens |

---

## 2. Languages (English / தமிழ்)

* English lives at `/…`, Tamil at `/ta/…` – **every page, heading, button, form label, FAQ, legal page, alt text and SEO tag exists in both.**
* A language switch (**EN | தமிழ்**) is in the header (desktop and mobile) and the footer; it opens the same page in the other language.
* `lib/content.ts` = English, `lib/content.ta.ts` = Tamil. TypeScript forces the Tamil file to keep the same shape, so a missing translation breaks `npm run typecheck`.
* Both languages are linked with `hreflang` (`en-IN`, `ta-IN`, `x-default`) in the page head and the sitemap.
* Have a native Tamil speaker proof-read `lib/content.ta.ts` before launch.

## 3. Project structure

```
app/
  (en)/…                      English pages  (layout = <html lang="en-IN">)
  (ta)/ta/…                   Tamil pages    (layout = <html lang="ta-IN">)
  og/[section]/route.tsx      1200×630 Open Graph image per section (with the logo)
  sitemap.ts · robots.ts · manifest.ts · llms.txt/ · llms-full.txt/ · icon.png · favicon.ico
views/                        One component per page (shared by /… and /ta/…)
components/                   Header (navy, logo, language switch), Footer, Hero & home sections, Card, FaqSection,
                              CtaBand, Breadcrumbs, JsonLd, QuickAnswer, WhatsApp floating button + mobile bar,
                              Gallery (lightbox), TestimonialCard, WhatsAppForm, ScrollEffects, CountUp …
lib/
  content.ts · content.ta.ts  ALL copy (EN / TA), SEO titles, descriptions, keywords, quick answers, UI strings
  metadata.ts · schema.ts · llms.ts · i18n.ts · utils.ts
public/images/                Photos (logo, founder portrait and favicon are real; the rest are placeholders)
scripts/                      placeholder generator, brand-asset processor, [CONFIRM] lister, SEO checker
docs/                         local-seo-checklist.md · google-business-profile.md
```

Pages (each in EN and TA): Home · Academy · POCT course · Health Assistant for Diabetics · Admissions & Fees · Home Care + 5 service pages · Diabetes Care · **About & Legacy** (the old Portfolio page was merged into About; `/portfolio` redirects permanently to `/about`) · Contact · Privacy · Terms (includes the medical disclaimer) · Refund policy.

## 4. Editing content

Edit **`lib/content.ts`** (English) and **`lib/content.ta.ts`** (Tamil). Keep both in step.

| What | Where |
|---|---|
| NAP, hours, social links, experience figure | `site` |
| Title / description / **keywords** / **quick answer (AEO)** per page | `seo` (run `npm run check:seo`) |
| Courses, skills, home-care services, diabetes pillars, About + legacy, admissions, legal | the matching export |
| FAQs (each list also produces FAQPage schema) | `homeFaqs`, `poctPage.faqs`, `haPage.faqs`, service `faqs`, `diabetesCare.faqs` |
| Buttons, labels, form text, breadcrumbs, footer headings | `ui` |
| Pre-filled WhatsApp messages | `waMessages` |

**Switches (hidden until confirmed):** `bankLoan.enabled` (loan block, trust item, FAQ, Admissions title), `studentsTrained.enabled`, and `testimonials` / `testimonialVideoId` (section hidden while empty).

**Yellow `[CONFIRM: …]` highlights** show on the page until fixed; they are stripped from JSON-LD, meta tags and llms.txt automatically.

### Images
Real files in place: `logo.png`, `logo-square.png`, `founder-portrait.jpg`, favicon (`app/icon.png`, `apple-icon.png`, `favicon.ico`). Everything else is a placeholder – replace files in `public/images/` keeping the exact names, compress to ≤ 200 KB, and rewrite the alt text in `images` (both content files) to match each real photo. Photos with political or public figures are not included until the client confirms in writing.

---

## 5. SEO, AEO and AI-crawler setup (all automatic)

* **Meta:** unique title, description, keywords, canonical, `hreflang`, Open Graph + Twitter cards (1200×630 image per section), `robots` with `max-image-preview:large`, geo tags (`geo.region`, `geo.placename`), author/publisher, manifest, theme colour, optional search-console verification.
* **JSON-LD:** sitewide knowledge graph (`WebSite`, `MedicalBusiness`, `EducationalOrganization`, offer catalogue, contact points, languages); per page `WebPage` / `AboutPage` / `ContactPage` / `CollectionPage` with **speakable**; `BreadcrumbList`; `FAQPage`; `Course` (+`Offer` ₹) on course pages; `Service` with `areaServed`; `HowTo` for booking and admission steps; `Person` for the founder.
* **AEO:** every content page opens with an “In short” answer box (40–70 words, self-contained, exposed as speakable) so answer engines can quote it.
* **robots.txt:** allows Google, Bing and the AI search / answer crawlers (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended …) and points to the sitemap.
* **llms.txt** and **llms-full.txt**: plain-text site summary and full content (English + Tamil), generated from the content files at build time.
* **sitemap.xml:** all 34 URLs with hreflang alternates and key images. **Redirect:** `/portfolio → /about`.
* Then follow [docs/local-seo-checklist.md](docs/local-seo-checklist.md) and use [docs/google-business-profile.md](docs/google-business-profile.md).

## 6. Design, animation and conversion

* Navy `#0B2A6F` / gold `#F2B705` / red CTA / green trust, matching the supplied logo (white + gold, so the header is navy). The “Complete Diabetic Care” band is flat navy with gold accents.
* **Scroll animation on every page:** content fades and rises as it scrolls into view (staggered in grids), a gold scroll-progress bar sits under the header, the header gains a shadow, and the founder’s experience numbers count up. Uses only `opacity`/`transform` with one IntersectionObserver; skipped for `prefers-reduced-motion`; content is fully visible without JavaScript.
* **About page:** a highlighted gold band right below the intro shows **50 years · 37 years at MMC · 21 directors**, and the “50 years” phrase is highlighted in the intro.
* Click-to-call and WhatsApp on every screen: sticky header Call button, floating WhatsApp (tablet/desktop), sticky mobile bar **[Call] [WhatsApp] [Apply]**, per-context pre-filled messages, WhatsApp-only forms (Apply form has 4 fields), GA4 events `click_call`, `click_whatsapp`, `click_apply`.

## 7. Deploy on Vercel

1. Push to GitHub (done: `developer272604/bsbhealthcare`).
2. Vercel → **Add New → Project → Import** the repository (Next.js is auto-detected).
3. **Settings → Environment Variables:** `NEXT_PUBLIC_SITE_URL` (final domain with `https://`) and `NEXT_PUBLIC_GA_ID`.
4. **Deploy.** Every push to `main` redeploys.

**Connect the domain:** Vercel → **Settings → Domains → Add** `bsbhealthcare.in` and `www.bsbhealthcare.in`; at the registrar add the A record / CNAME that Vercel shows (typically `A @ 76.76.21.21` and `CNAME www cname.vercel-dns.com`), wait for the green check (HTTPS is automatic), pick one canonical host, make `NEXT_PUBLIC_SITE_URL` match it exactly and **redeploy**. Then add the domain to Google Search Console and Bing Webmaster Tools, submit `/sitemap.xml`, and run the Rich Results Test on `/`, `/academy/point-of-care-testing`, `/home-care/blood-test-at-home` and `/about`.

---

## 8. Measured quality (local production build, simulated slow-4G mobile Lighthouse, placeholder photos)

* Accessibility, Best Practices and SEO: **100** on the pages sampled in both languages.
* Performance: roughly **90–98** (Home ≈ 93, About ≈ 97, Contact ≈ 98, Tamil pages ≈ 90–96). Scores varied ±5 between runs on the dev laptop, and the real photos will change the numbers, so **re-test on the deployed Vercel URL** (`npx lighthouse https://<domain> --form-factor=mobile`) before treating 95+ as proven on every page.
* Layout shift ≈ 0–0.05. Tricks used: fonts applied after load with a metrics-matched fallback, `content-visibility` for lower sections, inlined CSS, layout-read-free scroll effects, tiny icons.

## 9. Client sign-off – every `[CONFIRM]` item

Run `npm run confirm:list` for exact locations. Nothing here should go live unverified.

**Business:** final domain · domain email (replaces `labbala@yahoo.com`) · address (is #35 JN Salai, Ambal Nagar / Ultra Scans & Labs the training address?) · opening hours · latitude/longitude (`site.geo`) · GA4 ID · “50 years” total experience and the founder timeline years · areas served.
**Academy:** POCT duration, schedule, batch dates · POCT fee ₹3,000 and the “₹100 will be collected” meaning · Health Assistant fee ₹5,000, equipment kit (₹4,000?) · certificate issuing body (site says only “Certificate of completion”) · distance mode and partner centres · payment methods · bank loan (lender, amount, conditions) · students-trained number · real testimonials / video.
**Home care:** price list · lab that processes samples · nurse / physiotherapist qualifications · doctor name and registration · FSSAI licence number.
**Content / legal:** names, years and events for every vintage / association / award photo · Lions Club camp details · who gifted the microscope cake · written confirmation before adding any photo of public figures · optional Tamil Nadu diabetes figure · refund terms · legal review · matching alt text for the real photos · native-speaker review of the Tamil text.

## 10. Compliance rules built in
No “guaranteed job” (only placement support) · no “Govt. Certificate” without a named issuer · bank-loan block only with a named lender · no invented testimonials, counts, statistics, doctor names or registrations · footer on every page: **“Not an emergency service. In an emergency, call 108.”** · supplements never claimed to cure diabetes or replace medicine · no cookie banner or blocking popups.
