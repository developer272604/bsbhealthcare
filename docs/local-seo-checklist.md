# Local SEO Checklist – BSB Health Care, Chennai

Goal: rank for **point of care testing course Chennai**, **paramedical course after 12th Chennai**, **blood test at home Chennai**, **home nursing Chennai**, **physiotherapy at home Chennai**, **diabetic care at home Chennai**, **doctor home visit Chennai**.

> Do not publish anything below until the `[CONFIRM]` items in `lib/content.ts` are resolved (`npm run confirm:list`). Google punishes inconsistent business details.

## 1. Lock the NAP (Name · Address · Phone) – identical everywhere

| Field | Use exactly | Status |
|---|---|---|
| Name | BSB Health Care – Chennai | ✅ |
| Phone / WhatsApp | +91 99405 81843 | ✅ |
| Address | #35, Jawaharlal Nehru Salai, Ambal Nagar Bus Stop (Ultra Scans & Labs), Ekkattuthangal, Chennai – 600032 | ⚠ confirm it is the training / operations address |
| Hours | Mon–Sat, 7:00 AM – 8:00 PM | ⚠ confirm |
| Website | final domain | ⚠ confirm |
| Email | domain email (not Yahoo) | ⚠ confirm |

Write the NAP once in a notes file and copy-paste into every listing – never retype it, never abbreviate differently ("Salai" vs "Sl.").

## 2. Google Business Profile (highest-impact task)

1. Go to **business.google.com** → *Add your business*. Claim the existing listing if one exists (the Maps link `https://maps.google.com/?cid=183553982738219178` is already in use – claim *that* listing, do not create a duplicate).
2. **Name:** BSB Health Care – Chennai (no keyword stuffing).
3. **Primary category:** *Medical training center* (or *Training centre*). **Secondary:** *Home health care service*, *Medical lab*, *Physical therapy clinic* (only if offered), *Nursing agency*.
4. **Service area:** Ekkattuthangal, Guindy, Ullagaram, Madipakkam, Velachery, Nanganallur, Ashok Nagar, K.K. Nagar, Chennai.
5. **Address / phone / website / hours** exactly as in section 1. Website link: `https://<domain>/?utm_source=gbp&utm_medium=organic` so GA4 shows GBP traffic.
6. **Description:** paste from `docs/google-business-profile.md`.
7. **Services:** add each as a separate service with a one-line description – POCT Practical Training, Health Assistant for Diabetics course, Blood test at home, Home nursing, Physiotherapy at home, Doctor consultation at home, Diabetic diet & supplements. Do not add prices that are not confirmed.
8. **Photos (add 10+ in the first week):** logo, cover (founder with microscope), training sessions, health camps, certificate ceremony, exterior/entrance with signboard. Real photos only.
9. **Verification:** video or phone verification – do it as soon as the signboard and address are final.
10. **Posts:** one post every week (new batch dates, health-camp photos, diabetic care tip). Always include the Call/WhatsApp button.
11. **Messaging & Q&A:** turn on WhatsApp chat link; pre-seed 5 Q&As (fee, language, certificate wording, home-care areas, "is it an emergency service? No – call 108").

## 3. Reviews

- Create the review link: GBP dashboard → *Get more reviews* → copy the short link (`https://g.page/r/…/review`). Put it in the WhatsApp quick-reply and on a printed QR card.
- Ask **every** satisfied student/family within 48 hours of course completion or a home visit.
- Never pay for, fake or gate reviews. Reply to every review (thank positive ones; handle negatives politely and offline).
- Target: 10 genuine reviews in 60 days, mentioning the service and area naturally ("blood test at home in Velachery").
- Real, consented reviews can later be added to the homepage Testimonials block in `lib/content.ts` (`testimonials`).

## 4. Citations (listings) – same NAP, same category

Priority order:

1. **Justdial** – free listing; add categories *Paramedical Courses*, *Home Nursing Services*, *Pathology Labs – Home Collection*, *Physiotherapists at Home*.
2. **Sulekha** – Chennai → Health & Wellness / Training.
3. **IndiaMART** (services) and **TradeIndia** – optional.
4. **Practo** or **Lybrate** – only if a registered doctor is associated (do not list unverified practitioners).
5. **Facebook page** (already: `facebook.com/labbalaloyolacollege`) – update NAP, add website, WhatsApp button, pin the course post.
6. **YouTube channel** – short Tamil videos (How to check blood sugar, BMI, SpO₂). Link to the site in every description.
7. **Lions Club District 324J** web pages / Royal Ullagaram club page – ask for a backlink and a mention.
8. **Apple Business Connect**, **Bing Places** (import from Google), **JustDial/Sulekha** – 10 minutes each.
9. Local directories: Chennai education directories, "paramedical courses in Chennai" lists (ask to be added, do not buy links).

For each citation, record: URL, login, date, NAP matched ✔. Keep it in a shared sheet.

## 5. On-site local signals (already built into the site)

- NAP in the footer and on `/contact`; identical to listings.
- `MedicalBusiness` + `EducationalOrganization` JSON-LD with `areaServed`, hours, `sameAs` (add `geo` once the exact coordinates are confirmed in `lib/content.ts` → `site.geo`).
- One H1 per page with "Chennai"; unique titles ≤ 60 chars; unique descriptions ≤ 155 chars (`npm run check:seo`).
- Embedded Google Map on `/contact` and the homepage final CTA.
- Home-care service pages list neighbourhoods served (Ekkattuthangal, Guindy, Velachery …).
- Tamil headlines with `lang="ta"` for Tamil searches.

## 6. After launch

1. Add the site in **Google Search Console** (domain property) → submit `https://<domain>/sitemap.xml` → request indexing for the 34 URLs (17 pages × English + Tamil).
2. Add **Bing Webmaster Tools** (import from GSC).
3. Set GA4 ID (`NEXT_PUBLIC_GA_ID`) and mark `click_call`, `click_whatsapp`, `click_apply` as **key events**.
4. Run the **Rich Results Test** (search.google.com/test/rich-results) on `/`, `/academy/point-of-care-testing`, `/home-care/blood-test-at-home`, `/about`.
5. Share each service page on the Facebook page and in GBP posts.
6. Monthly: check GBP Insights (calls, direction requests), GSC queries, and add 1–2 genuine photos/posts.

## 7. Things not to do

- No fake reviews, no buying links, no keyword stuffing in the GBP name.
- No "guaranteed job" or "Govt. certificate" wording anywhere unless the issuing body is confirmed.
- No unverified doctor names, registration numbers, student counts or statistics.
- No supplement claims such as "cures" or "reverses" diabetes.
