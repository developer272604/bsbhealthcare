/**
 * ============================================================================
 *  BSB Health Care – Chennai · SINGLE SOURCE OF TRUTH FOR ALL COPY
 * ============================================================================
 *  - Every page reads its text from this file, so the site works as a template.
 *  - Square-bracket CONFIRM markers = information the client must verify before launch.
 *    They render as yellow highlights on the page and are listed by
 *    `npm run confirm:list`. `npm run check:launch` fails while any remain.
 *  - Items that must stay HIDDEN until confirmed (bank loan, student count,
 *    testimonials) are switched off with `enabled: false` / an empty array.
 *  - Never invent testimonials, statistics, student counts or doctor names.
 *  - Never write "guaranteed job" (use "placement support") and never write
 *    "Govt. Certificate" without naming the issuing body.
 * ============================================================================
 */

/* ----------------------------------------------------------------------------
 * 1. SITE / NAP (Name – Address – Phone must be identical everywhere)
 * ------------------------------------------------------------------------- */
export const site = {
  name: "BSB Health Care – Chennai",
  shortName: "BSB Health Care",
  academyName: "BSB Health Skills Academy",
  homeCareName: "BSB Home Health Care",
  // [CONFIRM: final domain, e.g. bsbhealthcare.in] – set NEXT_PUBLIC_SITE_URL in Vercel
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bsbhealthcare.in").replace(/\/$/, ""),
  locale: "en-IN",
  tagline: "The Complete Diabetic Care",
  taglineTa: "முழுமையான நீரிழிவு பராமரிப்பு",
  mission: "A trained health assistant in every family affected by diabetes in Tamil Nadu.",
  missionTa: "தமிழ்நாட்டில் நீரிழிவால் பாதிக்கப்பட்ட ஒவ்வொரு குடும்பத்திற்கும் ஒரு பயிற்சி பெற்ற சுகாதார உதவியாளர்.",
  vision:
    "Practical, affordable healthcare skills in Tamil for every family — so that routine health checks and diabetic care are never out of reach.",
  phoneDisplay: "+91 99405 81843",
  phoneTel: "+919940581843",
  whatsappNumber: "919940581843",
  // [CONFIRM: replace with a domain email, e.g. info@bsbhealthcare.in]
  email: "labbala@yahoo.com",
  address: {
    line1: "#35, Jawaharlal Nehru Salai, Ambal Nagar Bus Stop (Ultra Scans & Labs)",
    locality: "Ekkattuthangal",
    city: "Chennai",
    region: "Tamil Nadu",
    postalCode: "600032",
    country: "IN",
    // [CONFIRM: is this the training / operations address?]
    confirm: "[CONFIRM: confirm this is the training / operations address]",
  },
  landmark: "Ambal Nagar Bus Stop, Ekkattuthangal",
  // [CONFIRM: latitude / longitude from Google Maps – left null so wrong coordinates are never published]
  geo: null as null | { lat: number; lng: number },
  hours: {
    display: "Mon–Sat, 7:00 AM – 8:00 PM",
    // [CONFIRM: opening hours]
    confirm: "[CONFIRM: opening hours]",
    schema: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "07:00", closes: "20:00" },
  },
  facebook: "https://www.facebook.com/labbalaloyolacollege",
  mapsUrl: "https://maps.google.com/?cid=183553982738219178",
  mapsEmbed: "https://www.google.com/maps?cid=183553982738219178&output=embed",
  // [CONFIRM: GA4 measurement ID] – set NEXT_PUBLIC_GA_ID in Vercel
  ga4Id: process.env.NEXT_PUBLIC_GA_ID ?? "",
  // [CONFIRM: total experience 50 years] – one figure, used everywhere
  experience: "50 years",
  experienceNumber: "50",
  logo: "/images/logo.png",
};

export const founderInfo = {
  name: "M.R. Balachandran",
  title: "Founder, BSB Health Care – Chennai",
  role: "Retired Medical Laboratory Technician",
  institution: "Institute of Obstetrics & Gynaecology, Madras Medical College (MMC), Chennai",
  yearsAtMMC: "37 years",
  directors: "21 directors",
  lions: "Lions Club of Royal Ullagaram, District 324J",
};

/** Areas served for home care. [CONFIRM: final list] */
export const areasServed = [
  "Ekkattuthangal",
  "Guindy",
  "Ullagaram",
  "Madipakkam",
  "Velachery",
  "Nanganallur",
  "Ashok Nagar",
  "K.K. Nagar",
  "Chennai (other areas on request)",
];
export const areasConfirm = "[CONFIRM: final list of areas served]";

export const disclaimers = {
  emergency: "Not an emergency service. In an emergency, call 108.",
  emergencyTa: "இது அவசர சேவை அல்ல. அவசரத்தில் 108-ஐ அழைக்கவும்.",
  medical:
    "Information on this website is for general awareness and does not replace advice from a registered doctor. Our trained assistants do not prescribe or change medicines.",
  supplements:
    "Supplements support a healthy diet — they never replace prescribed medicine and do not cure diabetes.",
  placement: "We provide placement support; jobs depend on performance and availability.",
};

/* ----------------------------------------------------------------------------
 * 2. NAVIGATION
 * ------------------------------------------------------------------------- */
export const nav = [
  {
    label: "Academy",
    href: "/academy",
    children: [
      { label: "Academy overview", href: "/academy" },
      { label: "Point-of-Care Testing", href: "/academy/point-of-care-testing" },
      { label: "Health Assistant for Diabetics", href: "/academy/health-assistant-for-diabetics" },
      { label: "Admissions & Fees", href: "/admissions" },
    ],
  },
  {
    label: "Home Care",
    href: "/home-care",
    children: [
      { label: "All home care services", href: "/home-care" },
      { label: "Blood Test at Home", href: "/home-care/blood-test-at-home" },
      { label: "Home Nursing", href: "/home-care/home-nursing" },
      { label: "Physiotherapy at Home", href: "/home-care/physiotherapy-at-home" },
      { label: "Doctor Consultation", href: "/home-care/doctor-consultation-at-home" },
      { label: "Diabetic Diet & Supplements", href: "/home-care/diabetic-diet-and-supplements" },
    ],
  },
  { label: "Diabetes Care", href: "/diabetes-care" },
  { label: "About & Legacy", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  academy: [
    { label: "Academy overview", href: "/academy" },
    { label: "Point-of-Care Testing course", href: "/academy/point-of-care-testing" },
    { label: "Health Assistant for Diabetics", href: "/academy/health-assistant-for-diabetics" },
    { label: "Admissions & Fees", href: "/admissions" },
  ],
  homeCare: [
    { label: "Blood test at home", href: "/home-care/blood-test-at-home" },
    { label: "Home nursing", href: "/home-care/home-nursing" },
    { label: "Physiotherapy at home", href: "/home-care/physiotherapy-at-home" },
    { label: "Doctor consultation at home", href: "/home-care/doctor-consultation-at-home" },
    { label: "Diabetic diet & supplements", href: "/home-care/diabetic-diet-and-supplements" },
  ],
  company: [
    { label: "Complete Diabetic Care", href: "/diabetes-care" },
    { label: "About the founder & legacy", href: "/about" },
    { label: "Contact & location", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Medical Disclaimer", href: "/terms#medical-disclaimer" },
  ],
};

/* ----------------------------------------------------------------------------
 * 3. PRE-FILLED WHATSAPP MESSAGES (per context)
 * ------------------------------------------------------------------------- */
export const waMessages = {
  general: "Hello BSB Health Care, I would like some information.",
  apply: "Hello, I want to apply for training at BSB Health Skills Academy.",
  poct: "Hello, I want to apply for POCT (Point-of-Care Testing) practical training.",
  diabeticCourse: "Hello, I want to join the Health Assistant for Diabetics course.",
  homeCare: "Hello, I want to book a home health care service in Chennai.",
  bloodTest: "Hello, I want to book a blood test at home.",
  nursing: "Hello, I need a home nursing service.",
  physio: "Hello, I need physiotherapy at home.",
  doctor: "Hello, I want a doctor consultation at home / by video.",
  diet: "Hello, I want a diabetic diet plan.",
  diabetesCare: "Hello, I want to know about Complete Diabetic Care for my family.",
  contact: "Hello BSB Health Care, I have an enquiry.",
};

/* ----------------------------------------------------------------------------
 * 4. SEO – unique title (≤60) & description (≤155) per page. `npm run check:seo`
 * ------------------------------------------------------------------------- */
export type SeoEntry = {
  title: string;
  description: string;
  og: string;
  /** Meta keywords (ignored by Google, still used by some engines / AI crawlers) */
  keywords: string[];
  /** AEO: a self-contained 40–60 word answer shown on the page ("In short") and exposed as speakable */
  answer?: string;
};
export const seo: Record<string, SeoEntry> = {
  "/": {
    title: "POCT Training & Home Health Care in Chennai | BSB",
    description:
      "Learn Point-of-Care Testing in Tamil from a 50-year lab veteran, or book blood tests, nursing & physio at home in Chennai. Call +91 99405 81843.",
    og: "home",
    keywords: [
      "point of care testing course Chennai",
      "paramedical course after 12th Chennai",
      "health assistant course Tamil Nadu",
      "lab technician short course Chennai",
      "medical course after +2 in Tamil",
      "blood test at home Chennai",
      "home nursing Chennai",
      "diabetic care at home Chennai",
      "BSB Health Care Chennai",
    ],
    answer:
      "BSB Health Care in Chennai teaches Point-of-Care Testing and a 1-month Health Assistant for Diabetics course in Tamil, and provides home blood tests, nursing, physiotherapy, doctor visits and diabetic diet plans. It is led by M.R. Balachandran, a retired laboratory technician with 50 years of experience.",
  },
  "/academy": {
    title: "Health Skills Academy – Practical Courses in Chennai",
    description:
      "Tamil-medium practical healthcare training in Chennai for +1/+2 students and anyone wanting health skills. Small batches, real equipment, certificate.",
    og: "academy",
    keywords: [
      "health skills academy Chennai",
      "paramedical course after 12th Chennai",
      "medical course after +2 in Tamil",
      "healthcare training Chennai",
      "lab technician short course Chennai",
    ],
    answer:
      "BSB Health Skills Academy in Chennai offers Tamil-medium, hands-on healthcare courses for students after +1/+2 and anyone who wants a health skill: Point-of-Care Testing and Health Assistant for Diabetics. Classes are in small batches with real equipment, and students receive a certificate of completion and placement support.",
  },
  "/academy/point-of-care-testing": {
    title: "Point-of-Care Testing Course in Chennai (Tamil)",
    description:
      "Hands-on Point-of-Care Testing course in Chennai: blood sugar, BMI, SpO₂, haemoglobin, urine tests. Taught in Tamil. Fee ₹3,000. Apply on WhatsApp.",
    og: "academy",
    keywords: [
      "point of care testing course Chennai",
      "POCT training Chennai",
      "blood sugar testing course",
      "lab technician short course Chennai",
      "paramedical course after 12th Chennai",
      "medical course after +2 in Tamil",
    ],
    answer:
      "Point-of-Care Testing (POCT) is a hands-on course in Chennai that teaches seven quick health tests — body weight, BMI, temperature, SpO₂, blood sugar, haemoglobin and urine testing — in Tamil. Students who have passed +1/+2, homemakers and family members of diabetic patients can join.",
  },
  "/academy/health-assistant-for-diabetics": {
    title: "Health Assistant for Diabetics Course – Tamil Nadu",
    description:
      "1-month health assistant course for diabetic care in Tamil Nadu: glucometer, BP, foot check, diet basics. Direct or distance mode. For +2 students.",
    og: "academy",
    keywords: [
      "health assistant course Tamil Nadu",
      "diabetic care course",
      "diabetes health assistant training",
      "glucometer training course",
      "1 month medical course Chennai",
    ],
    answer:
      "Health Assistant for Diabetics is a 1-month course in Tamil Nadu covering glucometer use, blood pressure, diabetic foot checks, hypoglycaemia first aid, diet basics and record keeping. It is offered in direct or distance mode and is open to +2 students and family members of diabetic patients.",
  },
  "/admissions": {
    title: "Admissions & Fees – Health Courses in Chennai | BSB",
    description:
      "How to join BSB Health Skills Academy in Chennai: eligibility, documents needed, course fees and how to apply on WhatsApp in 5 simple steps.",
    og: "admissions",
    keywords: [
      "admission health course Chennai",
      "POCT course fees Chennai",
      "paramedical course fees Chennai",
      "apply health assistant course",
    ],
    answer:
      "To join BSB Health Skills Academy in Chennai, message us on WhatsApp, share your mark sheet, Aadhaar and a photo, register, attend practical classes in Tamil, receive your certificate of completion and get placement support. Any +1/+2 student or interested adult can apply.",
  },
  "/home-care": {
    title: "Home Health Care Services in Chennai | BSB",
    description:
      "Blood tests, home nursing, physiotherapy, doctor visits and diabetic diet plans at your doorstep in Chennai. Book by call or WhatsApp.",
    og: "home-care",
    keywords: [
      "home health care Chennai",
      "blood test at home Chennai",
      "home nursing Chennai",
      "physiotherapy at home Chennai",
      "doctor home visit Chennai",
      "diabetic care at home Chennai",
    ],
    answer:
      "BSB Home Health Care provides blood sample collection, home nursing, physiotherapy, doctor consultation and diabetic diet guidance at home in Ekkattuthangal, Guindy, Velachery, Madipakkam and nearby areas of Chennai. Call or WhatsApp +91 99405 81843 to book. It is not an emergency service — call 108.",
  },
  "/home-care/blood-test-at-home": {
    title: "Blood Test at Home in Chennai | Sugar, HbA1c, Thyroid",
    description:
      "Book a blood test at home in Chennai: sugar, HbA1c, lipid, thyroid, CBC. Sterile single-use kits, digital reports, led by a 50-year lab veteran.",
    og: "home-care",
    keywords: [
      "blood test at home Chennai",
      "home blood sample collection Chennai",
      "HbA1c test at home",
      "sugar test at home Chennai",
      "thyroid test at home Chennai",
    ],
    answer:
      "Our technician visits your home in Chennai to collect blood and urine samples for tests such as fasting and PP sugar, HbA1c, lipid, kidney, liver, thyroid, CBC, Vitamin D and B12, using sterile single-use kits. Reports are sent digitally by WhatsApp or email.",
  },
  "/home-care/home-nursing": {
    title: "Home Nursing in Chennai – Injections, Wound Care",
    description:
      "Home nursing in Chennai: insulin and injections, diabetic foot dressing, vitals monitoring, post-hospital and elderly care. Call or WhatsApp to book.",
    og: "home-care",
    keywords: [
      "home nursing Chennai",
      "nurse at home Chennai",
      "diabetic foot dressing at home",
      "injection at home Chennai",
      "elderly care at home Chennai",
    ],
    answer:
      "Home nursing in Chennai covers insulin and other prescribed injections, wound and diabetic foot dressing, vitals monitoring, catheter and Ryle’s tube care, post-hospital recovery and elderly care. Nurses follow your doctor’s prescription and never change medicines on their own.",
  },
  "/home-care/physiotherapy-at-home": {
    title: "Physiotherapy at Home in Chennai | Knee, Back, Stroke",
    description:
      "Physiotherapy at home in Chennai for knee and back pain, stroke rehab, post-surgery recovery and fall prevention. Book a home visit on WhatsApp.",
    og: "home-care",
    keywords: [
      "physiotherapy at home Chennai",
      "home physiotherapist Chennai",
      "stroke rehabilitation at home",
      "knee pain physiotherapy Chennai",
    ],
    answer:
      "Physiotherapy at home in Chennai treats knee and back pain, supports stroke and post-surgery recovery, prevents falls in the elderly and designs diabetic-friendly exercise plans. A physiotherapist assesses you at home, gives a clear plan and reviews your progress.",
  },
  "/home-care/doctor-consultation-at-home": {
    title: "Doctor Home Visit in Chennai – Consult at Home",
    description:
      "Doctor home visit or video consultation in Chennai: examination, report review, prescription and follow-up by a registered allopathic doctor.",
    og: "home-care",
    keywords: [
      "doctor home visit Chennai",
      "doctor consultation at home Chennai",
      "video consultation doctor Chennai",
      "general physician home visit",
    ],
    answer:
      "A registered allopathic doctor can visit your home in Chennai or consult by video, examine you, review your reports, prescribe treatment and plan follow-up. It is not an emergency service; for emergencies call 108.",
  },
  "/home-care/diabetic-diet-and-supplements": {
    title: "Diabetic Diet Plan & Supplements in Chennai",
    description:
      "South Indian diabetic diet plans, portion control and supplement guidance in Chennai. Supports — never replaces — your doctor's medicines.",
    og: "home-care",
    keywords: [
      "diabetic diet plan Chennai",
      "South Indian diabetic diet",
      "diabetes diet chart Tamil",
      "diabetic supplements guidance Chennai",
    ],
    answer:
      "We create South Indian diabetic diet plans with portion control for Chennai families and guide on supplements as support only. Supplements do not cure diabetes and never replace prescribed medicine.",
  },
  "/diabetes-care": {
    title: "Diabetic Care at Home in Chennai – 7 Pillars",
    description:
      "Complete diabetic care at home in Chennai: education, medication, glucose monitoring, wound care, diet, activity and emotional support.",
    og: "diabetes-care",
    keywords: [
      "diabetic care at home Chennai",
      "diabetes care Chennai",
      "complete diabetic care",
      "diabetic foot care at home",
      "blood sugar monitoring at home",
    ],
    answer:
      "Complete Diabetic Care at home rests on seven pillars: diabetic education, medication management, blood glucose monitoring, wound care, diet and nutrition, physical activity and emotional support. BSB brings trained help for each pillar to families in Chennai; medicines are changed only by a doctor.",
  },
  "/about": {
    title: "M.R. Balachandran – 50 Years in Labs | BSB Chennai",
    description:
      "Meet M.R. Balachandran, founder of BSB Health Care Chennai: 50 years in medical labs, 37 at Madras Medical College. Legacy, photos, community work.",
    og: "about",
    keywords: [
      "M.R. Balachandran",
      "BSB Health Care founder",
      "Madras Medical College laboratory technician",
      "Lions Club Royal Ullagaram",
      "50 years medical laboratory experience Chennai",
    ],
    answer:
      "M.R. Balachandran is a retired Medical Laboratory Technician with 50 years of experience, including 37 years at the Institute of Obstetrics & Gynaecology, Madras Medical College, under 21 directors. He founded BSB Health Care in Chennai and is a member of the Lions Club of Royal Ullagaram, District 324J.",
  },
  "/contact": {
    title: "Contact BSB Health Care – Chennai | Call & WhatsApp",
    description:
      "Call or WhatsApp +91 99405 81843. Find BSB Health Care at Ambal Nagar Bus Stop, Ekkattuthangal, Chennai 600032 — map, hours and enquiry form.",
    og: "contact",
    keywords: [
      "BSB Health Care Chennai contact",
      "Ekkattuthangal health care",
      "health care near Ambal Nagar bus stop",
      "WhatsApp +91 99405 81843",
    ],
    answer:
      "BSB Health Care is at #35, Jawaharlal Nehru Salai, Ambal Nagar Bus Stop, Ekkattuthangal, Chennai 600032. Call or WhatsApp +91 99405 81843, Monday to Saturday 7:00 AM to 8:00 PM. It is not an emergency service; call 108 in an emergency.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | BSB Health Care – Chennai",
    description:
      "How BSB Health Care in Chennai handles your name, phone number and enquiry details when you contact us by form, call or WhatsApp.",
    og: "legal",
    keywords: ["BSB Health Care privacy policy"],
  },
  "/terms": {
    title: "Terms of Use & Medical Disclaimer | BSB Health Care",
    description:
      "Terms of use, service terms and medical disclaimer for BSB Health Care – Chennai. Not an emergency service; in an emergency call 108.",
    og: "legal",
    keywords: ["BSB Health Care terms", "medical disclaimer"],
  },
  "/refund-policy": {
    title: "Course Fee Refund Policy | BSB Health Skills Academy",
    description:
      "Refund and cancellation policy for course fees at BSB Health Skills Academy, Chennai, including how to request a refund.",
    og: "legal",
    keywords: ["BSB Health Skills Academy refund policy"],
  },
};

/* ----------------------------------------------------------------------------
 * 5. IMAGES – exact filenames from the client inventory (placeholders are
 *    generated with the same names; replace files, keep names).
 *    ALT TEXT MUST BE CHECKED against the real photo when it is supplied.
 * ------------------------------------------------------------------------- */
export type Img = { src: string; alt: string; w: number; h: number; caption?: string };
const img = (file: string, alt: string, w = 1200, h = 800, caption?: string): Img => ({
  src: `/images/${file}`,
  alt,
  w,
  h,
  caption,
});

export const images = {
  logo: img("logo.png", "BSB Home Health Care logo – gold globe and the tagline The Complete Diabetic Care", 600, 214),
  logoSquare: img("logo-square.png", "BSB Home Health Care logo on navy background", 512, 512),
  founderPortrait: img("founder-portrait.jpg", "Portrait of M.R. Balachandran, founder of BSB Health Care, Chennai", 800, 1000),
  founderMicroscope: img("founder-microscope-lab.jpg", "M.R. Balachandran examining a slide under a microscope in the laboratory"),
  mmcWall: img("mmc-wall-of-directors.jpg", "Wall of directors at the Institute of Obstetrics & Gynaecology, Madras Medical College"),
  lions: img("lions-club.jpg", "M.R. Balachandran with members of the Lions Club of Royal Ullagaram, District 324J"),
  vintage: img("vintage-group-photo.jpg", "Vintage sepia group photograph of medical laboratory staff from Madras Medical College"),
  cake: img("microscope-cake.jpg", "Cake shaped like a microscope, a gift to M.R. Balachandran from students and colleagues"),
  kumaresan: img("association-kumaresan.jpg", "M.R. Balachandran with Prof. M. Kumaresan of Siva ENT Hospitals", 1000, 800),
  rajkumar: img("association-rajkumar.jpg", "M.R. Balachandran with Prof. J.S. Rajkumar of Lifeline Group of Hospitals", 1000, 800),
  ravikumar: img("association-ravikumar.jpg", "M.R. Balachandran with Dr. Ravikumar, Chairman of Thambiran Heart Foundation", 1000, 800),
  ameerjohn: img("association-ameerjohn.jpg", "M.R. Balachandran with Prof. Ameerjohn of A.J. Trust Hospital", 1000, 800),
  gts: img("gts-wellness.jpg", "M.R. Balachandran at GTS Centre for Wellness", 1000, 800),
  training: [
    img("training-session-1.jpg", "Students learning to check blood sugar with a glucometer during a BSB practical training session"),
    img("training-session-2.jpg", "Trainer demonstrating a pulse oximeter reading to students at BSB Health Skills Academy"),
    img("training-session-3.jpg", "Student practising blood pressure measurement under supervision in a BSB training class"),
    img("training-session-4.jpg", "Small batch of students doing hands-on urine testing in the BSB training room"),
    img("training-session-5.jpg", "M.R. Balachandran explaining haemoglobin testing to a group of students"),
    img("training-session-6.jpg", "Students receiving course certificates at the end of a BSB training batch"),
  ],
  camps: [
    img("health-camp-1.jpg", "Volunteers checking blood sugar at a community health camp in Chennai"),
    img("health-camp-2.jpg", "Lions Club health camp with residents queuing for free health screening"),
    img("health-camp-3.jpg", "Trained assistants measuring body weight and BMI at a health camp"),
    img("health-camp-4.jpg", "Health camp volunteers explaining test results to a senior citizen"),
  ],
  awards: [
    img("awards-1.jpg", "M.R. Balachandran receiving an award at a medical laboratory technicians' conference"),
    img("awards-2.jpg", "Felicitation ceremony honouring M.R. Balachandran for his service"),
    img("awards-3.jpg", "Memento and certificate presented to M.R. Balachandran at a professional conference"),
  ],
};

/** Homepage gallery – 12 photos. Photos of political / public figures are NOT included
 *  until the client confirms them in writing. */
export const gallery: Img[] = [
  images.training[0],
  images.training[1],
  images.camps[0],
  images.training[2],
  images.founderMicroscope,
  images.camps[1],
  images.training[3],
  images.lions,
  images.cake,
  images.training[4],
  images.camps[2],
  images.training[5],
];

/** Open Graph image per section is generated at /og/[section] */
export const ogSections: Record<string, { heading: string; sub: string }> = {
  home: { heading: "Point-of-Care Testing Training & Home Health Care", sub: "Chennai · Taught in Tamil" },
  academy: { heading: "BSB Health Skills Academy", sub: "Practical healthcare training in Tamil · Chennai" },
  admissions: { heading: "Admissions & Fees", sub: "Apply on WhatsApp · Chennai" },
  "home-care": { heading: "Home Health Care in Chennai", sub: "Blood tests · Nursing · Physio · Doctor · Diet" },
  "diabetes-care": { heading: "The Complete Diabetic Care", sub: "At home in Chennai · 7 pillars of care" },
  about: { heading: "M.R. Balachandran", sub: "Founder, BSB Health Care – Chennai" },
  contact: { heading: "Contact BSB Health Care", sub: "Call or WhatsApp +91 99405 81843" },
  legal: { heading: "BSB Health Care – Chennai", sub: "Policies & disclaimers" },
};

/* ----------------------------------------------------------------------------
 * 6. THE 7 SKILLS (shared by Home, Academy and POCT pages)
 * ------------------------------------------------------------------------- */
export type Skill = {
  slug: string;
  en: string;
  ta: string;
  icon: string;
  what: string;
  why: string;
  practise: string;
};

export const skills: Skill[] = [
  {
    slug: "body-weight",
    en: "Body Weight",
    ta: "உடல் எடை",
    icon: "scale",
    what: "Measuring body weight correctly with a digital weighing scale and recording it on a health card.",
    why: "Sudden weight gain or loss is one of the earliest signs that diabetes, thyroid or heart conditions need attention.",
    practise: "Weigh at least ten people, note the reading, and learn how to repeat the check in the same conditions each time.",
  },
  {
    slug: "bmi",
    en: "BMI – Body Mass Index",
    ta: "BMI உடல் பருமன் குறியீடு",
    icon: "bmi",
    what: "Measuring height and weight, calculating BMI and placing the result in a healthy, overweight or obese range.",
    why: "BMI helps families see risk for diabetes and high blood pressure early and decide when to speak to a doctor.",
    practise: "Measure height with a stadiometer, calculate BMI by hand and by calculator, and explain the result in simple Tamil.",
  },
  {
    slug: "temperature",
    en: "Temperature",
    ta: "வெப்பநிலை",
    icon: "thermometer",
    what: "Taking body temperature with digital and infrared thermometers and recognising fever ranges.",
    why: "Fever is the first signal of infection — especially important for diabetic and elderly patients, who get sick faster.",
    practise: "Use each thermometer type, learn correct placement and cleaning, and practise recording and reporting readings.",
  },
  {
    slug: "spo2",
    en: "SpO₂ – Oxygen Level",
    ta: "SpO₂ ஆக்சிஜன் அளவு",
    icon: "spo2",
    what: "Using a pulse oximeter to read blood oxygen saturation and pulse rate.",
    why: "A low oxygen reading can signal breathing or heart trouble that needs a doctor quickly.",
    practise: "Take readings on different fingers, learn what causes false readings (cold hands, nail polish) and when to escalate.",
  },
  {
    slug: "blood-sugar",
    en: "Blood Sugar",
    ta: "இரத்த சர்க்கரை",
    icon: "drop",
    what: "Checking capillary blood glucose with a glucometer — fasting and post-meal — using safe, hygienic technique.",
    why: "Blood sugar checking is the single most useful skill for diabetic families and health camps.",
    practise: "Prepare the finger, use a lancet and strip, read and record results, and dispose of sharps safely.",
  },
  {
    slug: "haemoglobin",
    en: "Haemoglobin",
    ta: "ஹீமோகுளோபின்",
    icon: "hb",
    what: "Measuring haemoglobin with a point-of-care meter to screen for low blood levels (anaemia).",
    why: "Anaemia is common among women and teenage girls; early screening helps them get proper medical advice.",
    practise: "Collect a small blood sample, operate the meter, read the result and explain what a low value may mean.",
  },
  {
    slug: "urine-testing",
    en: "Urine Testing",
    ta: "சிறுநீர் பரிசோதனை",
    icon: "urine",
    what: "Screening urine with dipsticks for sugar, protein, ketones and other basic parameters.",
    why: "Urine sugar and protein can reveal diabetes and early kidney problems before symptoms appear.",
    practise: "Collect a proper sample, dip and time the strip, match colours to the chart and record the result.",
  },
];

/* ----------------------------------------------------------------------------
 * 7. HOMEPAGE: hero, trust strip, why, steps
 * ------------------------------------------------------------------------- */
export const hero = {
  ta: "சுகாதாரத் துறையில் PRACTICAL SKILL கற்றுக்கொள்ள விருப்பமா?",
  h1: "Point-of-Care Testing Practical Training & Home Health Care in Chennai",
  sub: `Learn real healthcare skills in Tamil from M.R. Balachandran — ${site.experience} in medical laboratory service, Madras Medical College.`,
  ctaApply: "Apply for Training",
  ctaHome: "Book Home Care",
};

/** Students trained – HIDDEN until the real number is confirmed. */
export const studentsTrained = {
  enabled: false,
  count: "[CONFIRM: number]",
};

/** Bank loan assistance – HIDDEN everywhere until the lender is named. */
export const bankLoan = {
  enabled: false,
  lender: "[CONFIRM: lender name]",
  amount: "[CONFIRM: loan amount]",
  conditions: "[CONFIRM: eligibility & conditions]",
};

export const trust: { icon: string; title: string; text: string }[] = [
  { icon: "award", title: `${site.experience} Experience`, text: "In medical laboratory service" },
  { icon: "hospital", title: "Madras Medical College", text: "Background of 37 years at MMC" },
  { icon: "certificate", title: "Certificate Provided", text: "Certificate of completion" },
  ...(bankLoan.enabled
    ? [{ icon: "bank", title: "Bank Loan Assistance", text: `With ${bankLoan.lender}` }]
    : []),
  ...(studentsTrained.enabled
    ? [{ icon: "users", title: `${studentsTrained.count} Students Trained`, text: "And counting" }]
    : []),
  { icon: "language", title: "Taught in Tamil", text: "Practical, hands-on classes" },
];

export const whyTraining = {
  titleTa: "ஏன் இந்த TRAINING?",
  title: "Why this training?",
  points: [
    { icon: "hands", en: "Learn basic health tests fully hands-on", ta: "அடிப்படை பரிசோதனைகளை நேரடியாக கற்றுக்கொள்ளுங்கள்" },
    { icon: "briefcase", en: "Improve job opportunities in the medical field", ta: "மருத்துவ துறையில் வேலை வாய்ப்பை அதிகரிக்கவும்" },
    { icon: "rocket", en: "Gain skills for self-employment", ta: "சுயதொழிலுக்கான திறன்களைப் பெறுங்கள்" },
    { icon: "certificate", en: "Get recognised with a certificate", ta: "சான்றிதழ் மூலம் அங்கீகாரம் பெறுங்கள்" },
  ],
};

export const admissionSteps = {
  title: "Admission in 5 steps",
  titleTa: "5 எளிய படிகளில் சேர்க்கை",
  steps: [
    { n: 1, en: "Call / WhatsApp us", ta: "அழைக்கவும் / WhatsApp", text: "Tell us your qualification and the course you want." },
    { n: 2, en: "Register", ta: "பதிவு செய்யுங்கள்", text: "Share your documents and confirm your seat." },
    { n: 3, en: "Practical Training", ta: "செய்முறைப் பயிற்சி", text: "Attend hands-on classes in small batches, in Tamil." },
    { n: 4, en: "Certificate", ta: "சான்றிதழ்", text: "Receive your certificate of completion." },
    { n: 5, en: "Placement Support", ta: "வேலைவாய்ப்பு உதவி", text: "We guide you towards job and self-employment options." },
  ],
};

/* ----------------------------------------------------------------------------
 * 8. COURSES
 * ------------------------------------------------------------------------- */
export const courses = {
  poct: {
    slug: "point-of-care-testing",
    href: "/academy/point-of-care-testing",
    title: "POCT Practical Training",
    ta: "பாயின்ட்-ஆஃப்-கேர் டெஸ்டிங் செய்முறைப் பயிற்சி",
    full: "Point-of-Care Testing (POCT) Practical Training",
    // [CONFIRM: duration]
    duration: "[CONFIRM: duration]",
    mode: "Direct, hands-on (in person)",
    fee: "₹3,000",
    feeNumber: 3000,
    // [CONFIRM: what "₹100 will be collected" means — registration fee?]
    feeNote: "[CONFIRM: what “₹100 will be collected” means — is it a registration fee?]",
    summary:
      "Seven essential health tests learned fully hands-on, in Tamil — body weight, BMI, temperature, SpO₂, blood sugar, haemoglobin and urine testing.",
    apply: waMessages.poct,
  },
  diabetic: {
    slug: "health-assistant-for-diabetics",
    href: "/academy/health-assistant-for-diabetics",
    title: "Health Assistant for Diabetics",
    ta: "நீரிழிவு நோயாளிகளுக்கான உடல்நல உதவியாளர் படிப்பு",
    full: "Health Assistant for Diabetics – 1-Month Course",
    duration: "1 month",
    mode: "Direct or distance learning",
    fee: "₹5,000",
    feeNumber: 5000,
    // [CONFIRM: fee ₹5,000; includes equipment kit worth ₹4,000?]
    feeNote: "[CONFIRM: fee ₹5,000 and whether it includes the equipment kit worth ₹4,000]",
    summary:
      "A one-month course that trains you to support diabetic patients at home — glucometer use, BP, foot checks, diet basics and record keeping.",
    apply: waMessages.diabeticCourse,
  },
};

/* ----------------------------------------------------------------------------
 * 9. FOUNDER (short bio for home, full for /about)
 * ------------------------------------------------------------------------- */
export const founder = {
  heading: "Meet the founder",
  headingTa: "நிறுவனர் அறிமுகம்",
  short: `M.R. Balachandran is a retired Medical Laboratory Technician who served 37 years at the Institute of Obstetrics & Gynaecology, Madras Medical College, under 21 directors. With ${site.experience} in laboratory service, he now teaches practical health skills in Tamil and leads home health care for diabetic families in Chennai. He is a member of the Lions Club of Royal Ullagaram, District 324J.`,
  cta: "Read full story",
};

/* ----------------------------------------------------------------------------
 * 10. HOME CARE SERVICES (overview + 5 template pages)
 * ------------------------------------------------------------------------- */
export type Faq = { q: string; a: string };

export type HomeCareService = {
  slug: string;
  href: string;
  name: string;
  ta: string;
  icon: string;
  h1: string;
  card: string;
  intro: string;
  included: string[];
  steps: { title: string; text: string }[];
  whoFor: string[];
  areaNote: string;
  confirm: string;
  faqs: Faq[];
  wa: string;
  schemaType: string;
};

export const homeCare: {
  overview: {
    h1: string;
    ta: string;
    intro: string;
    howTitle: string;
    how: { title: string; text: string }[];
    pricingTitle: string;
    pricing: string;
    pricingConfirm: string;
    ctaTitle: string;
    ctaText: string;
  };
  services: HomeCareService[];
} = {
  overview: {
    h1: "Home Health Care Services in Chennai",
    ta: "வீட்டிலேயே சுகாதார சேவைகள்",
    intro:
      "BSB Home Health Care brings trusted, affordable health services to your doorstep across Chennai — led by a medical laboratory professional with 50 years of experience. Whether you are looking after a diabetic parent, recovering from surgery or simply cannot travel for tests, our team comes to you.",
    howTitle: "How booking works",
    how: [
      { title: "Call or WhatsApp", text: "Tell us the service you need and your area in Chennai." },
      { title: "Confirm time & details", text: "We confirm the visit slot, what to prepare and the charges." },
      { title: "Our team visits", text: "A trained professional comes to your home with sterile, single-use equipment." },
      { title: "Follow-up", text: "Reports, advice and next steps are shared with you and your family." },
    ],
    pricingTitle: "Affordable, transparent pricing",
    pricing:
      "Charges depend on the service, tests chosen and your location. We tell you the full price before the visit — no hidden costs. Call or WhatsApp for the current price list.",
    pricingConfirm: "[CONFIRM: add price list / starting prices]",
    ctaTitle: "Book a home health care visit",
    ctaText: "Tell us the service and your area — we’ll confirm the time and price before we come.",
  },
  services: [
    /* ------------------------------ BLOOD TEST ------------------------------ */
    {
      slug: "blood-test-at-home",
      href: "/home-care/blood-test-at-home",
      name: "Blood Test at Home",
      ta: "வீட்டிலேயே இரத்தப் பரிசோதனை",
      icon: "drop",
      h1: "Blood Test at Home in Chennai",
      card: "Sample collection at your doorstep with sterile kits and digital reports.",
      intro:
        "Skip the queue and the fasting-hour travel. Our trained technician visits your home in Ekkattuthangal, Guindy, Velachery and nearby areas of Chennai to collect blood and urine samples using sterile, single-use kits. The service is led by M.R. Balachandran, a medical laboratory professional with 50 years of experience, so your sample is handled the way a hospital laboratory would handle it.",
      included: [
        "Fasting and post-prandial (PP) blood sugar",
        "HbA1c for 3-month sugar control",
        "Lipid profile, kidney function and liver function tests",
        "Thyroid profile, complete blood count (CBC), Vitamin D and B12",
        "Urine routine and urine sugar / protein tests",
        "Sterile single-use kits and digital reports by WhatsApp or email",
      ],
      steps: [
        { title: "Book", text: "Call or WhatsApp with the tests you need (or send the doctor’s prescription)." },
        { title: "Choose a slot", text: "Pick an early-morning slot for fasting tests; we confirm the price in advance." },
        { title: "Sample collection", text: "Our technician collects the sample at home using sterile, single-use equipment." },
        { title: "Digital report", text: "Receive your report on WhatsApp or email, ready to show your doctor." },
      ],
      whoFor: [
        "Diabetic patients who need regular sugar and HbA1c checks",
        "Senior citizens and people with limited mobility",
        "Families who want full-body check-ups together at home",
        "People who cannot take time off work for a lab visit",
      ],
      areaNote:
        "We collect samples across Ekkattuthangal, Guindy, Ullagaram, Madipakkam, Velachery, Nanganallur, Ashok Nagar and K.K. Nagar.",
      confirm: "[CONFIRM: name of the laboratory where samples are processed and any accreditation]",
      faqs: [
        {
          q: "Do I need to fast before a home blood test?",
          a: "For fasting sugar and lipid tests you should fast for 8–10 hours (water is allowed). For other tests fasting may not be needed. We tell you exactly what to do when you book.",
        },
        {
          q: "How soon will I get the report?",
          a: "Most routine reports (sugar, HbA1c, CBC, lipid) are shared the same day or the next day by WhatsApp or email. Some special tests take longer; we tell you the timing when you book.",
        },
        {
          q: "Is the sample collection safe and hygienic?",
          a: "Yes. We use sterile, single-use needles and collection kits for every patient and dispose of them safely.",
        },
        {
          q: "Can I send my doctor’s prescription?",
          a: "Yes. Send a photo of the prescription on WhatsApp +91 99405 81843 and we will confirm the tests and price before the visit.",
        },
      ],
      wa: waMessages.bloodTest,
      schemaType: "Blood sample collection at home",
    },
    /* ------------------------------ NURSING ------------------------------ */
    {
      slug: "home-nursing",
      href: "/home-care/home-nursing",
      name: "Home Nursing",
      ta: "வீட்டு செவிலியர் சேவை",
      icon: "nurse",
      h1: "Home Nursing in Chennai",
      card: "Injections, wound and diabetic foot dressing, vitals and post-hospital care.",
      intro:
        "Recovering or caring for a loved one at home is easier with a trained nurse beside you. BSB Home Nursing in Chennai supports diabetic and elderly patients with injections, dressings, vital-sign monitoring and recovery care after hospital discharge — so your family gets professional help without hospital trips.",
      included: [
        "Insulin and other injections as prescribed by your doctor",
        "Wound care and diabetic foot dressing",
        "Vitals monitoring: BP, pulse, temperature, SpO₂ and blood sugar",
        "Catheter and Ryle’s tube care",
        "Post-hospital and post-surgery recovery support",
        "Elderly care and guidance to family members",
      ],
      steps: [
        { title: "Tell us the need", text: "Call or WhatsApp with the patient’s condition and the doctor’s advice." },
        { title: "Assessment visit", text: "A nurse visits, understands the care plan and explains the schedule and charges." },
        { title: "Regular care", text: "Care is given as prescribed — daily, alternate days or as needed." },
        { title: "Updates", text: "Family receives progress updates and is told when to call the doctor." },
      ],
      whoFor: [
        "Diabetic patients needing insulin support or foot-wound dressing",
        "Patients returning home after hospital stay or surgery",
        "Bed-ridden or elderly family members",
        "Families who want a trained person to monitor vitals regularly",
      ],
      areaNote:
        "Home nursing visits are available in Ekkattuthangal, Guindy, Ullagaram, Madipakkam, Velachery, Nanganallur, Ashok Nagar and K.K. Nagar.",
      confirm: "[CONFIRM: nurse qualification / registration details to display]",
      faqs: [
        {
          q: "Do nurses give injections without a prescription?",
          a: "No. Injections and medicines are given only as prescribed by a registered doctor. Our nurses do not change or start medicines on their own.",
        },
        {
          q: "Can a nurse look after a diabetic foot wound?",
          a: "Yes, a trained nurse can clean and dress a diabetic foot wound and watch for signs of infection. If the wound worsens, we advise you to see your doctor immediately.",
        },
        {
          q: "Is this suitable for emergencies?",
          a: "No. For chest pain, breathing difficulty, unconsciousness or other emergencies, call 108 immediately.",
        },
        {
          q: "Can I book a nurse for a few days only?",
          a: "Yes. Visits can be one-time, for a few days or for regular follow-up, depending on the doctor’s plan.",
        },
      ],
      wa: waMessages.nursing,
      schemaType: "Home nursing care",
    },
    /* ------------------------------ PHYSIO ------------------------------ */
    {
      slug: "physiotherapy-at-home",
      href: "/home-care/physiotherapy-at-home",
      name: "Physiotherapy at Home",
      ta: "வீட்டிலேயே பிசியோதெரபி",
      icon: "physio",
      h1: "Physiotherapy at Home in Chennai",
      card: "Knee and back pain, stroke rehab, post-surgery recovery and fall prevention.",
      intro:
        "Pain and weakness make travelling to a clinic hard, especially for senior citizens and diabetic patients. Our physiotherapy at home in Chennai brings exercise-based treatment to your living room, with a plan that fits your condition, your doctor’s advice and your daily routine.",
      included: [
        "Knee pain and back pain treatment plans",
        "Stroke and paralysis rehabilitation exercises",
        "Post-surgery recovery (knee, hip, spine) as advised by your surgeon",
        "Fall-prevention and balance training for the elderly",
        "Diabetic-friendly exercise plans and walking programmes",
        "Home-exercise guidance for family members",
      ],
      steps: [
        { title: "Book a visit", text: "Call or WhatsApp with your problem and any reports or doctor’s notes." },
        { title: "Assessment", text: "The physiotherapist assesses pain, movement and strength." },
        { title: "Treatment plan", text: "You receive a clear plan: exercises, number of sessions and goals." },
        { title: "Review", text: "Progress is reviewed regularly and the plan adjusted." },
      ],
      whoFor: [
        "Adults with knee, back or neck pain",
        "Stroke patients and their families",
        "People recovering from fractures or surgery",
        "Senior citizens at risk of falls",
        "Diabetic patients starting a safe exercise routine",
      ],
      areaNote:
        "Physiotherapy home visits cover Ekkattuthangal, Guindy, Ullagaram, Madipakkam, Velachery, Nanganallur, Ashok Nagar and K.K. Nagar.",
      confirm: "[CONFIRM: physiotherapist name, qualification and registration to display]",
      faqs: [
        {
          q: "How many sessions will I need?",
          a: "It depends on the condition. After the first assessment the physiotherapist tells you the expected number of sessions and reviews progress as you go.",
        },
        {
          q: "Do I need a doctor’s referral?",
          a: "Not always, but for stroke, fractures or recent surgery please share your doctor’s notes or reports so exercises stay safe.",
        },
        {
          q: "Is exercise safe if I have diabetes?",
          a: "Regular, gentle exercise helps most people with diabetes, but the plan must be tailored, especially if you have foot problems or take insulin. We design diabetic-friendly plans and check with your doctor when needed.",
        },
      ],
      wa: waMessages.physio,
      schemaType: "Physiotherapy at home",
    },
    /* ------------------------------ DOCTOR ------------------------------ */
    {
      slug: "doctor-consultation-at-home",
      href: "/home-care/doctor-consultation-at-home",
      name: "Doctor Consultation at Home",
      ta: "மருத்துவர் வீட்டு ஆலோசனை",
      icon: "stethoscope",
      h1: "Doctor Consultation at Home in Chennai",
      card: "Registered allopathic doctor visits or video consults, report review and follow-up.",
      intro:
        "When travelling to a hospital is difficult, a doctor home visit in Chennai can save you time and stress. A registered allopathic doctor examines the patient, reviews reports, explains the condition in simple language and prescribes treatment — in person at home or by video call.",
      included: [
        "Home visit by a registered allopathic doctor",
        "Video consultation when a visit is not needed",
        "Review of blood tests, scans and earlier prescriptions",
        "Examination, diagnosis and written prescription",
        "Diabetes and blood-pressure review with medicine advice",
        "Follow-up consultation and advice on when to visit a hospital",
      ],
      steps: [
        { title: "Request", text: "Call or WhatsApp with symptoms, age and any recent reports." },
        { title: "Schedule", text: "We confirm the doctor’s visit or video-call time and the fee." },
        { title: "Consultation", text: "The doctor examines, reviews reports and explains the plan." },
        { title: "Prescription & follow-up", text: "You receive a prescription and a follow-up date." },
      ],
      whoFor: [
        "Senior citizens and bed-ridden patients",
        "Diabetic and hypertensive patients needing routine review",
        "Patients recovering at home after hospital discharge",
        "Families who need a second opinion on reports at home",
      ],
      areaNote:
        "Doctor home visits are offered in Ekkattuthangal, Guindy, Ullagaram, Madipakkam, Velachery, Nanganallur, Ashok Nagar and K.K. Nagar. Video consultations are available across Chennai.",
      confirm: "[CONFIRM: doctor name, qualification and medical council registration number – do not publish until verified]",
      faqs: [
        {
          q: "Is this an emergency service?",
          a: "No. For chest pain, severe breathlessness, stroke symptoms, unconsciousness or very low sugar with confusion, call 108 immediately.",
        },
        {
          q: "Will the doctor prescribe medicines?",
          a: "Yes. A registered doctor can prescribe after examining the patient. Our nurses, technicians and health assistants never prescribe on their own.",
        },
        {
          q: "Can I get a video consultation instead of a visit?",
          a: "Yes. Many follow-ups and report reviews can be done by video call. The doctor will advise if an in-person visit is needed.",
        },
      ],
      wa: waMessages.doctor,
      schemaType: "Doctor home visit and consultation",
    },
    /* ------------------------------ DIET ------------------------------ */
    {
      slug: "diabetic-diet-and-supplements",
      href: "/home-care/diabetic-diet-and-supplements",
      name: "Diabetic Diet & Supplements",
      ta: "நீரிழிவு உணவு & சப்ளிமெண்ட்ஸ்",
      icon: "apple",
      h1: "Diabetic Diet Plan & Supplements in Chennai",
      card: "South Indian diabetic meal plans, portion control and supplement guidance.",
      intro:
        "Good food is the daily half of diabetes care. We create practical South Indian diabetic diet plans for Chennai families — built around idli, dosa, rice, millets, dhal and vegetables you already cook — with clear portion guidance. Supplements are suggested only as support, never as a replacement for your doctor’s medicines.",
      included: [
        "South Indian diabetic meal plans for breakfast, lunch, dinner and snacks",
        "Portion control using everyday vessels and plates",
        "Guidance on rice, millets, fruits, sweets and festival foods",
        "Meal timing around insulin or tablets, as advised by your doctor",
        "Supplement guidance — to support, not replace, prescribed medicine",
        "Follow-up reviews using your blood sugar and weight readings",
      ],
      steps: [
        { title: "Share your details", text: "Send age, weight, recent sugar / HbA1c values and current medicines." },
        { title: "Diet assessment", text: "We understand your food habits, family cooking style and routine." },
        { title: "Meal plan", text: "You receive a simple plan in Tamil or English with portion guidance." },
        { title: "Review", text: "We review sugar readings and adjust the plan together." },
      ],
      whoFor: [
        "People newly diagnosed with diabetes or pre-diabetes",
        "Families cooking for a diabetic parent or spouse",
        "Patients struggling to control post-meal sugar",
        "Anyone who wants to lose weight safely with diabetes",
      ],
      areaNote:
        "Diet consultations are available at home across Ekkattuthangal, Guindy, Ullagaram, Madipakkam, Velachery, Nanganallur, Ashok Nagar and K.K. Nagar, and online across Chennai.",
      confirm: "[CONFIRM: FSSAI licence number for supplements – show only if the licence is held]",
      faqs: [
        {
          q: "Can supplements cure or reverse diabetes?",
          a: "No. Supplements do not cure diabetes and must never replace your prescribed medicines. Always keep taking your medicines and speak to your doctor before starting any supplement.",
        },
        {
          q: "Will I have to give up rice and idli?",
          a: "No. Most diabetic patients can eat rice, idli and dosa in the right portion with enough vegetables and protein. We show you how to adjust portions and combinations.",
        },
        {
          q: "Is the diet plan suitable if I take insulin?",
          a: "The plan is designed around your doctor’s medicine schedule. If you take insulin, meal timing and carbohydrate portions matter, so please share your prescription with us.",
        },
      ],
      wa: waMessages.diet,
      schemaType: "Diabetic diet and nutrition guidance",
    },
  ],
};

/* ----------------------------------------------------------------------------
 * 11. DIABETES CARE (pillar page)
 * ------------------------------------------------------------------------- */
export const diabetesCare = {
  h1: "Complete Diabetic Care at Home in Chennai",
  ta: "முழுமையான நீரிழிவு பராமரிப்பு — உங்கள் வீட்டிலேயே",
  intro:
    "Diabetes is a lifelong condition, but with the right knowledge, regular monitoring and a trained helper at home, most families can manage it confidently. “The Complete Diabetic Care” is BSB’s way of bringing seven pillars of care together for diabetic and elderly patients in Chennai.",
  context: {
    title: "Diabetes in India and Tamil Nadu",
    text: "The ICMR-INDIAB national study, published in The Lancet Diabetes & Endocrinology (2023), estimated that about 101 million people in India live with diabetes (11.4% of the population) and a further 136 million have pre-diabetes. Tamil Nadu is among the states surveyed. Because diabetes is so common, nearly every family either has a patient or knows one — and daily support at home matters as much as hospital visits.",
    source: {
      label: "Metabolic non-communicable disease health report of India: the ICMR-INDIAB national cross-sectional study (Lancet Diabetes Endocrinol 2023)",
      href: "https://doi.org/10.1016/S2213-8587(23)00119-5",
    },
    confirm: "[CONFIRM: add a Tamil Nadu-specific figure from ICMR-INDIAB only if the client wants one, citing the exact table]",
  },
  pillarsTitle: "The 7 pillars of complete diabetic care",
  pillarsIntro: "“The Complete Diabetic Care” — seven pillars that work together.",
  faqTitle: "Diabetic care — frequently asked questions",
  ctaTitle: "Get trained help for diabetes care at home",
  careComes: {
    title: "Care that comes to you",
    text: "Explore our home services for diabetic and elderly patients in Chennai, or train as a health assistant yourself.",
  },
  pillars: [
    {
      slug: "diabetic-education",
      icon: "book",
      title: "Diabetic Education",
      ta: "நீரிழிவு கல்வி",
      text: "Good control starts with understanding. Patients and family members learn what diabetes is, why sugar rises and falls, what the numbers on a glucometer mean and which complications to watch for — eyes, kidneys, nerves and feet. Our assistants explain everything in simple Tamil, using the patient’s own readings and routine. When the whole family understands the condition, it becomes easier to follow the doctor’s advice, notice problems early and avoid myths such as stopping medicine when sugar looks normal.",
      link: { label: "Learn the skills in our Health Assistant course", href: "/academy/health-assistant-for-diabetics" },
    },
    {
      slug: "medication-management",
      icon: "pill",
      title: "Medication Management",
      ta: "மருந்து மேலாண்மை",
      text: "Missed doses, wrong timing and confusion between tablets are common problems, especially for elders. We help families organise medicines in a weekly pill box, understand what each medicine is for, store insulin correctly and keep a written schedule. Our nurses give injections only as prescribed by a registered doctor. We never change doses or start medicines on our own — if a medicine seems to cause trouble, we guide you to speak to your doctor promptly.",
      link: { label: "Home nursing in Chennai", href: "/home-care/home-nursing" },
    },
    {
      slug: "blood-glucose-monitoring",
      icon: "drop",
      title: "Blood Glucose Monitoring",
      ta: "இரத்த சர்க்கரை கண்காணிப்பு",
      text: "Regular testing shows how food, exercise, stress and medicine affect sugar. Daily finger-prick readings are noted in a log, while laboratory tests such as HbA1c show the three-month picture. Our technician can collect samples at home for fasting sugar, post-meal sugar and HbA1c, and trained assistants can teach family members to use a glucometer correctly. Sharing the readings with your doctor lets treatment be adjusted on facts rather than guesswork.",
      link: { label: "Blood test at home in Chennai", href: "/home-care/blood-test-at-home" },
    },
    {
      slug: "wound-care",
      icon: "bandage",
      title: "Wound Care",
      ta: "காயப் பராமரிப்பு",
      text: "High sugar slows healing and reduces feeling in the feet, so a small blister or cut can quickly become a serious ulcer. Daily foot inspection, clean and dry dressings, well-fitting footwear and early medical review are essential. Our nurses clean and dress wounds, including diabetic foot wounds, and teach families what to look for: redness, swelling, discharge, bad smell or fever. Any wound that does not improve in a few days should be shown to a doctor without delay.",
      link: { label: "Wound and foot care by home nurses", href: "/home-care/home-nursing" },
    },
    {
      slug: "diet-and-nutrition",
      icon: "apple",
      title: "Diet & Nutrition",
      ta: "உணவு & ஊட்டச்சத்து",
      text: "Diabetic eating does not mean giving up your favourite South Indian food. It means balancing portions of rice, idli, dosa and sweets with plenty of vegetables, dhal, millets and protein, and eating at regular times. We prepare simple meal plans around what your family already cooks, with portion guidance using everyday vessels. Supplements may be suggested as support, but they never replace medicine and do not cure diabetes.",
      link: { label: "Diabetic diet & supplements in Chennai", href: "/home-care/diabetic-diet-and-supplements" },
    },
    {
      slug: "physical-activity",
      icon: "run",
      title: "Physical Activity",
      ta: "உடற்பயிற்சி",
      text: "Movement helps the body use insulin better and supports healthy weight, heart and mood. A daily 30-minute walk, gentle strength exercises and stretching suit most people, but the plan must match age, joint problems, foot condition and medicines. Our physiotherapists design safe routines, including for people with knee pain, after stroke or at risk of falls, and show family members how to continue at home.",
      link: { label: "Physiotherapy at home in Chennai", href: "/home-care/physiotherapy-at-home" },
    },
    {
      slug: "emotional-support",
      icon: "heart",
      title: "Emotional Support",
      ta: "மன ஆதரவு",
      text: "Living with a lifelong condition can bring worry, frustration and “diabetes fatigue”. Feeling heard makes a big difference. Our team listens, encourages small wins, involves family members and notices when a patient seems low or withdrawn. A trained health assistant who visits regularly gives patients and caregivers confidence. If sadness or anxiety continues, we encourage you to talk to your doctor about further support.",
      link: { label: "Talk to our team", href: "/contact" },
    },
  ],
  warning: {
    title: "Warning signs you should never ignore",
    low: {
      title: "Low sugar (hypoglycaemia)",
      ta: "இரத்த சர்க்கரை குறைவு",
      signs: [
        "Shakiness, sweating, sudden hunger",
        "Dizziness, headache, fast heartbeat",
        "Confusion, irritability or blurred vision",
      ],
      action:
        "If sugar is below 70 mg/dL (or the level your doctor advised) and the person is awake and able to swallow, give about 15 g of fast sugar — for example glucose powder or sugar dissolved in water — and recheck after 15 minutes. If the person is drowsy, cannot swallow or is unconscious, call 108 immediately.",
    },
    high: {
      title: "High sugar (hyperglycaemia)",
      ta: "இரத்த சர்க்கரை அதிகம்",
      signs: [
        "Extreme thirst and frequent urination",
        "Tiredness, blurred vision, slow-healing wounds",
        "Nausea, vomiting, stomach pain, fruity breath or drowsiness — emergency",
      ],
      action:
        "Drink water, take your medicines as prescribed and contact your doctor. If there is vomiting, stomach pain, fast breathing or drowsiness, go to the nearest hospital or call 108 immediately.",
    },
  },
  seeDoctor: {
    title: "When to see a doctor",
    points: [
      "Blood sugar stays above or below the targets your doctor gave you for several days",
      "A foot wound, blister or ulcer is not healing, or the foot turns red, swollen or numb",
      "You notice vision changes, chest discomfort, swelling in the legs or very little urine",
      "You are unwell and unable to eat or drink, or you have repeated vomiting",
      "You want to stop, change or add any medicine or supplement",
    ],
  },
  faqs: [
    {
      q: "Can diabetes be cured?",
      a: "Diabetes cannot be cured, but it can be controlled with medicines as prescribed, healthy food, regular activity and monitoring. No supplement or home remedy should replace your doctor’s treatment.",
    },
    {
      q: "How often should I check my blood sugar?",
      a: "It depends on your type of diabetes and medicines. Many people check fasting and post-meal sugar a few times a week, and HbA1c every three months. Your doctor will set the right schedule for you.",
    },
    {
      q: "Can a health assistant adjust my medicines?",
      a: "No. Health assistants and nurses monitor, support and report — only a registered doctor changes medicines.",
    },
    {
      q: "Can my family learn to look after me at home?",
      a: "Yes. Family members can join our one-month Health Assistant for Diabetics course to learn glucometer use, BP checks, foot checks, diet basics and record keeping.",
    },
  ] as Faq[],
};

/* ----------------------------------------------------------------------------
 * 12. ABOUT – founder story + legacy & portfolio (merged page)
 * ------------------------------------------------------------------------- */
export const about = {
  h1: "About M.R. Balachandran – Founder, BSB Health Care",
  ta: "நிறுவனர் எம்.ஆர். பாலச்சந்திரன்",
  intro: `M.R. Balachandran is a retired Medical Laboratory Technician who has spent ${site.experience} in laboratory service. After 37 years at the Institute of Obstetrics & Gynaecology, Madras Medical College, he founded BSB Health Care to pass on practical skills to the next generation and to bring trained help into the homes of diabetic families in Chennai.`,
  /** Highlighted experience band shown directly below the intro */
  experience: {
    eyebrow: "Experience that matters",
    highlight: site.experience,
    title: `${site.experience} of service in medical laboratories`,
    text: "Every student at BSB learns from a professional who has spent half a century inside hospital laboratories — taking real samples, reading real results and training colleagues. That depth of experience is behind every course and every home visit.",
    items: [
      { value: Number(site.experienceNumber), label: "Years in medical laboratory service", icon: "award" },
      { value: 37, label: "Years at the Institute of Obstetrics & Gynaecology, Madras Medical College", icon: "hospital" },
      { value: 21, label: "Directors served under during his MMC career", icon: "users" },
    ],
    confirm: "[CONFIRM: total experience 50 years]",
  },
  timelineTitle: "His story",
  timeline: [
    {
      when: "[CONFIRM: year]",
      title: "Early career in medical laboratory work",
      text: "Began his career in medical laboratory technology. [CONFIRM: place of training and first posting]",
    },
    {
      when: "37 years",
      title: "Institute of Obstetrics & Gynaecology, Madras Medical College",
      text: "Served as a Medical Laboratory Technician for 37 years under 21 directors, handling the day-to-day laboratory work of one of Chennai’s best-known women’s and children’s hospitals.",
    },
    {
      when: "[CONFIRM: year]",
      title: "Retirement from government service",
      text: "Retired from MMC but not from service — he continued to support patients, doctors and colleagues in laboratory medicine.",
    },
    {
      when: "[CONFIRM: year]",
      title: "Founding of BSB Health Care",
      text: "Founded BSB Health Care – Chennai with two goals: practical training through BSB Health Skills Academy, and doorstep care through BSB Home Health Care.",
    },
    {
      when: "[CONFIRM: year]",
      title: "Training students in Tamil",
      text: "Began teaching Point-of-Care Testing and diabetic health-assistant skills to +2 students and families, entirely in Tamil and fully hands-on.",
    },
    {
      when: "Ongoing",
      title: "Lions Club of Royal Ullagaram, District 324J",
      text: "Active member of the Lions Club of Royal Ullagaram, taking part in community health camps. [CONFIRM: positions held and camp details]",
    },
  ],
  philosophy: {
    title: "Philosophy",
    points: [
      {
        title: "Every diabetic family needs trained help at home",
        text: "Most diabetes care happens at home, not in hospital. A family member or neighbour who can check sugar, BP and feet correctly — and knows when to call a doctor — prevents many emergencies.",
      },
      {
        title: "Practical skills over theory",
        text: "After a lifetime in the laboratory, he believes skills are learned by doing. Every student handles the real equipment, takes real readings and practises until confident.",
      },
      {
        title: "Tamil first",
        text: "Health knowledge should not be locked behind English. Classes, handouts and patient guidance are in Tamil, so any student or family member can follow.",
      },
    ],
  },
  ctaTitle: `Learn from a ${site.experienceNumber}-year lab veteran`,
  ctaTa: "உங்கள் எதிர்காலத்தை உருவாக்குங்கள்!",
  missionTitle: "Mission & vision",
  missionLabel: "Mission",
  visionLabel: "Vision",

  /* ---- Legacy & portfolio (anchor #legacy) ---- */
  legacy: {
    title: "Legacy & portfolio",
    ta: "50 ஆண்டுகால சேவை",
    intro:
      "A selection of memories from a long career in Chennai’s medical laboratories — shared as a record of work, friendships and community service.",
    archive: {
      title: "Vintage archive",
      intro: "Photographs from the early decades of service at Madras Medical College.",
      items: [
        {
          img: images.vintage,
          caption: "Vintage group photograph with laboratory colleagues. [CONFIRM: names, year and event]",
        },
        {
          img: images.mmcWall,
          caption: "Wall of directors at the Institute of Obstetrics & Gynaecology, MMC — the 21 directors under whom he served. [CONFIRM: names and years]",
        },
      ],
    },
    associationsTitle: "Memories & associations",
    associationsNote:
      "These photographs are personal memories and professional associations over the years. They are not endorsements of BSB Health Care by the people or organisations shown.",
    associations: [
      { img: images.kumaresan, name: "Prof. M. Kumaresan", org: "Siva ENT Hospitals", note: "[CONFIRM: year / event]" },
      { img: images.rajkumar, name: "Prof. J.S. Rajkumar", org: "Lifeline Group of Hospitals", note: "[CONFIRM: year / event]" },
      { img: images.ravikumar, name: "Dr. Ravikumar", org: "Chairman, Thambiran Heart Foundation", note: "[CONFIRM: year / event]" },
      { img: images.ameerjohn, name: "Prof. Ameerjohn", org: "A.J. Trust Hospital", note: "[CONFIRM: year / event]" },
      { img: images.gts, name: "GTS Centre for Wellness", org: "Wellness centre", note: "[CONFIRM: year / event]" },
    ],
    community: {
      title: "Community work – Lions Club of Royal Ullagaram",
      text: "As a member of the Lions Club of Royal Ullagaram, District 324J, M.R. Balachandran takes part in community health camps offering free basic screening such as blood sugar, BMI and BP checks. [CONFIRM: camp dates, locations and number of people screened — do not publish numbers until verified]",
    },
    recognition: {
      title: "Recognition",
      text: "Conference awards and felicitations received over a long career.",
      items: [
        { img: images.awards[0], caption: "Award at a medical laboratory technicians’ conference. [CONFIRM: award name, year, awarding body]" },
        { img: images.awards[1], caption: "Felicitation ceremony. [CONFIRM: occasion, year, organiser]" },
        { img: images.awards[2], caption: "Memento and certificate presented at a conference. [CONFIRM: details]" },
      ],
    },
    cake: {
      title: "From the lab, with love",
      ta: "ஆய்வகத்திலிருந்து அன்புடன்",
      text: "A cake shaped like a microscope — a gift from students and colleagues, a reminder that a laboratory career is built on people as much as instruments. [CONFIRM: who gifted it and on what occasion]",
    },
    // NOTE: photos with political or public figures are intentionally NOT included.
    // Add them only with the client's written confirmation, captioning the event
    // and never implying endorsement.
  },
};

/* ----------------------------------------------------------------------------
 * 14. ACADEMY pages
 * ------------------------------------------------------------------------- */
export const academy = {
  whyTitle: "Why practical skills matter",
  ctaTitle: "Start your healthcare career in Tamil",
  ctaTa: "உங்கள் எதிர்காலத்தை உருவாக்குங்கள்!",
  ctaText: "Join the next practical batch at BSB Health Skills Academy, Chennai.",
  h1: "BSB Health Skills Academy – Practical Healthcare Training in Tamil",
  ta: "BSB ஹெல்த் ஸ்கில்ஸ் அகாடமி — தமிழில் செய்முறை பயிற்சி",
  intro: [
    "Healthcare is one of the few fields where skill matters more than marks. A person who can correctly check blood sugar, oxygen level, haemoglobin and urine is useful in clinics, pharmacies, health camps and homes — and families need these people more every year.",
    `BSB Health Skills Academy was started by M.R. Balachandran, who spent 37 years in the Madras Medical College laboratory and ${site.experience} in laboratory service overall. Classes are in Tamil, in small batches, and every student handles real equipment from day one.`,
  ],
  whoFor: {
    title: "Who is it for?",
    points: [
      "Students who have completed +1 / +2 and want a path into the medical field",
      "Anyone who wants a healthcare skill — homemakers, job-seekers, career changers",
      "Family members of diabetic and elderly patients",
      "People who want to start self-employment in health screening",
    ],
  },
  methodTitle: "How we teach",
  method: [
    { icon: "hands", title: "Hands-on from day one", text: "Students use glucometers, pulse oximeters, haemoglobin meters and urine strips on real people, not just diagrams." },
    { icon: "users", title: "Small batches", text: "Small groups so that every student gets personal supervision and enough practice time." },
    { icon: "flask", title: "Real equipment", text: "Training with the same point-of-care devices used in clinics, camps and home visits." },
    { icon: "language", title: "In Tamil", text: "Concepts are explained in Tamil, with English terms introduced gradually so you can read labels and reports." },
  ],
  certificate: {
    title: "Certificate",
    text: "On completion you receive a Certificate of completion from BSB Health Skills Academy.",
    // [CONFIRM: exact issuing body name / any external accreditation. Never write "Govt. Certificate" unless confirmed.]
    confirm: "[CONFIRM: exact issuing body name and any external accreditation]",
  },
  placement: {
    title: "Placement support",
    text: "We guide students towards opportunities such as health camps, clinics and home-care roles, and help those who want to start self-employment. " + disclaimers.placement,
  },
};

export const poctPage = {
  faqTitle: "POCT course — frequently asked questions",
  ctaTitle: "Apply for POCT Practical Training",
  ctaTa: "உங்கள் எதிர்காலத்தை உருவாக்குங்கள்!",
  ctaText: "Message us on WhatsApp to reserve your seat in the next batch.",
  schemaDescription:
    "Hands-on Point-of-Care Testing course in Chennai covering body weight, BMI, temperature, SpO₂, blood sugar, haemoglobin and urine testing, taught in Tamil.",
  h1: "Point-of-Care Testing Practical Training in Chennai",
  ta: "பாயின்ட்-ஆஃப்-கேர் டெஸ்டிங் செய்முறைப் பயிற்சி",
  overview: [
    "Point-of-Care Testing (POCT) means doing quick, simple health tests at the place where the patient is — a clinic, a health camp, a pharmacy or a home — and getting a result in minutes. It is the most practical skill a +2 student can learn to enter healthcare.",
    "This course teaches seven essential POCT skills in Tamil, with real equipment and plenty of practice. It is led by M.R. Balachandran, who has " + site.experience + " in medical laboratory service.",
  ],
  whoCanJoin: [
    "Students who have passed +1 / +2 (any group)",
    "Homemakers and family members of diabetic patients",
    "Anyone who wants a healthcare skill or a start in self-employment",
  ],
  modulesTitle: "What you will learn — module by module",
  schedule: {
    title: "Duration & schedule",
    duration: "[CONFIRM: course duration]",
    schedule: "[CONFIRM: class days, timings and batch start dates]",
    mode: "Direct, in-person classes in small batches. [CONFIRM: weekday / weekend batches]",
  },
  fee: {
    title: "Course fee",
    text: "₹3,000 for the complete Point-of-Care Testing Practical Training.",
    confirm: "[CONFIRM: ₹3,000 final fee and what “₹100 will be collected” means — registration fee?]",
  },
  certificate: academy.certificate,
  careersTitle: "Career options after this course",
  careers: [
    { title: "Health camp assistant", text: "Support screening at community, school and corporate health camps." },
    { title: "Clinic assistant", text: "Handle vitals, sugar and haemoglobin checks at small clinics." },
    { title: "Home health assistant", text: "Visit patients at home for routine checks and monitoring." },
    { title: "Pharmacy screening assistant", text: "Offer BP, sugar and BMI checks at pharmacies." },
    { title: "Self-employed screening", text: "Start your own neighbourhood health-screening service." },
  ],
  careersNote: disclaimers.placement,
  faqs: [
    { q: "Who can join the POCT course?", a: "Students who have passed +1 / +2 (any group), and also homemakers and family members of diabetic patients. No prior medical knowledge is needed." },
    { q: "Is the course taught in Tamil?", a: "Yes. Classes are in Tamil, with English medical terms introduced step by step." },
    { q: "How much is the fee?", a: "The fee is ₹3,000. [CONFIRM: final fee and what “₹100 will be collected” means]" },
    { q: "Will I get a certificate?", a: "Yes, a Certificate of completion from BSB Health Skills Academy on finishing the course." },
    { q: "Will I get a job after this course?", a: disclaimers.placement },
    { q: "Do I need to buy equipment?", a: "Training equipment is provided during classes. [CONFIRM: whether students need to buy anything]" },
  ] as Faq[],
};

export const haPage = {
  faqTitle: "Health Assistant course — frequently asked questions",
  ctaTitle: "Join the Health Assistant for Diabetics course",
  ctaTa: "உங்கள் எதிர்காலத்தை உருவாக்குங்கள்!",
  ctaText: "One month. Hands-on. In Tamil. Message us to reserve your seat.",
  syllabusIntro: "Seven practical units, taught hands-on in Tamil.",
  schemaDescription:
    "One-month Health Assistant for Diabetics course in Tamil Nadu: glucometer use, blood pressure, diabetic foot check, hypoglycaemia escalation, diet basics and record keeping. Direct or distance mode.",
  h1: "Health Assistant for Diabetics – 1-Month Course",
  ta: "+1 / +2 தேறிய மாணவர்களுக்கு மருத்துவ துறையில் வேலை வாய்ப்பு",
  overview: [
    "Diabetes care happens mostly at home, and families struggle to find someone trained to help. The Health Assistant for Diabetics course is a one-month programme that prepares you to support diabetic patients safely — by monitoring, recording, guiding and escalating to the doctor when needed.",
    "It suits +1 / +2 students looking for a start in the medical field, and also family members who want to care better for a diabetic parent or spouse.",
  ],
  mode: {
    title: "Direct or distance mode",
    text: "Choose direct classes, or distance learning with guided practice. Practical training is arranged at partner centres. [CONFIRM: partner centre names and locations; distance-learning format]",
  },
  family: {
    title: "Family members can join too",
    text: "You do not need to plan a medical career to join. Families of diabetic patients can join to learn how to check sugar, BP and feet correctly and to keep proper records.",
  },
  kit: {
    title: "Equipment kit",
    text: "Students receive an equipment kit for practice. [CONFIRM: kit contents and ₹4,000 value, and whether it is included in the fee]",
  },
  syllabusTitle: "Syllabus",
  syllabus: [
    { title: "Glucometer use", text: "Correct finger-prick technique, strip handling, reading and recording results." },
    { title: "Blood pressure", text: "Measuring BP with a digital or manual device and recognising high and low readings." },
    { title: "Insulin-support basics", text: "Storing insulin, reading pen settings and supporting a patient’s prescribed routine — never changing doses." },
    { title: "Diabetic foot check", text: "Daily foot inspection, early signs of ulcers and when to refer." },
    { title: "Hypoglycaemia signs & escalation", text: "Recognising low sugar, giving first aid and calling a doctor or 108." },
    { title: "Diet basics", text: "South Indian meal portions, timing and common mistakes." },
    { title: "Record keeping", text: "Maintaining a clear log of sugar, BP, weight and medicines to share with the doctor." },
  ],
  scope:
    "A health assistant supports and monitors; they do not diagnose, prescribe or change medicines. Those decisions always belong to a registered doctor.",
  fee: {
    title: "Course fee",
    text: "₹5,000 for the one-month course.",
    confirm: "[CONFIRM: fee ₹5,000 and whether it includes the equipment kit]",
  },
  faqs: [
    { q: "Who can join this course?", a: "Students who have passed +1 / +2, and family members of diabetic patients. Anyone interested in diabetic care can enquire." },
    { q: "What is the course duration?", a: "One month." },
    { q: "Can I learn through distance mode?", a: "Yes, direct and distance modes are offered, with practical training at partner centres. [CONFIRM: details of distance mode]" },
    { q: "Is an equipment kit provided?", a: "Yes, students receive an equipment kit. [CONFIRM: kit contents, value and whether it is included in the fee]" },
    { q: "Is a job guaranteed after the course?", a: disclaimers.placement },
  ] as Faq[],
};

/* ----------------------------------------------------------------------------
 * 15. ADMISSIONS
 * ------------------------------------------------------------------------- */
export const admissions = {
  // Bank loan wording appears only when bankLoan.enabled = true (lender confirmed).
  h1: bankLoan.enabled ? "Admissions, Fees & Bank Loan Assistance" : "Admissions & Fees",
  ta: bankLoan.enabled ? "சேர்க்கை, கட்டணம் & வங்கிக் கடன் உதவி" : "சேர்க்கை & கட்டணம்",
  intro:
    "Joining is simple: message us on WhatsApp, share your documents and confirm your seat. Here is everything you need to know about eligibility, fees and payment.",
  eligibility: {
    title: "Eligibility",
    points: [
      "Students who have passed +1 / +2 (any group)",
      "Anyone interested in learning healthcare skills — homemakers, job-seekers and family members of diabetic patients",
      "No prior medical experience required",
    ],
  },
  documents: {
    title: "Documents needed",
    points: ["Mark sheet (+1 / +2 or last qualification)", "Aadhaar card copy", "Passport-size photograph"],
  },
  feeTable: {
    title: "Fee table",
    caption: "Course fees at BSB Health Skills Academy",
    headers: ["Course", "Duration", "Mode", "Fee"],
    rows: [
      [courses.poct.title, courses.poct.duration, courses.poct.mode, courses.poct.fee],
      [courses.diabetic.title, courses.diabetic.duration, courses.diabetic.mode, courses.diabetic.fee],
    ],
    confirm: [courses.poct.feeNote, courses.diabetic.feeNote],
  },
  included: {
    title: "What’s included",
    points: [
      "Hands-on practical training with real equipment",
      "Study material in Tamil [CONFIRM: confirm what material is given]",
      "Certificate of completion",
      "Placement support",
    ],
  },
  payment: {
    title: "Payment methods",
    text: "[CONFIRM: accepted payment methods — UPI / cash / bank transfer]",
  },
  batches: {
    title: "Next batch dates",
    text: "[CONFIRM: upcoming batch start dates] Call or WhatsApp to reserve a seat.",
  },
  loanTitle: "Bank loan assistance",
  refundNote: "Please read our refund policy before paying any fee.",
  ctaTitle: "Questions before you apply?",
  ctaText: "Call or WhatsApp — we’re happy to explain everything in Tamil.",
  form: {
    title: "Apply now",
    ta: "இப்போதே விண்ணப்பிக்கவும்",
    text: "Fill in four details — your message opens in WhatsApp and we reply with the next steps.",
  },
};

/* ----------------------------------------------------------------------------
 * 16. HOMEPAGE FAQ (FAQPage schema)
 * ------------------------------------------------------------------------- */
export const homeFaqs: Faq[] = [
  {
    q: "Who can join the courses?",
    a: "Students who have completed +1 / +2 (any group) can join. The courses are also open to homemakers, job-seekers and family members of diabetic patients — no prior medical knowledge needed.",
  },
  {
    q: "Is the course taught in Tamil?",
    a: "Yes. All classes are taught in Tamil, with English medical terms introduced step by step.",
  },
  {
    q: "What is the fee?",
    a: "The Point-of-Care Testing Practical Training fee is ₹3,000 and the Health Assistant for Diabetics course is ₹5,000. [CONFIRM: final fees and inclusions]",
  },
  {
    q: "Which certificate will I get?",
    a: "You receive a Certificate of completion from BSB Health Skills Academy. [CONFIRM: exact issuing body name before using the word “government” or any accreditation]",
  },
  ...(bankLoan.enabled
    ? [
        {
          q: "How does the bank loan work?",
          a: `Bank loan assistance is available through ${bankLoan.lender}. Amount: ${bankLoan.amount}. Conditions: ${bankLoan.conditions}.`,
        },
      ]
    : []),
  {
    q: "Is a job guaranteed?",
    a: disclaimers.placement,
  },
  {
    q: "Do you offer distance learning?",
    a: "The Health Assistant for Diabetics course is offered in direct or distance mode, with practical training at partner centres. [CONFIRM: distance-learning details]",
  },
  {
    q: "Which areas do you cover for home care?",
    a: "We cover Ekkattuthangal, Guindy, Ullagaram, Madipakkam, Velachery, Nanganallur, Ashok Nagar, K.K. Nagar and other parts of Chennai on request. [CONFIRM: final list]",
  },
  {
    q: "How do I book a home blood test?",
    a: "Call or WhatsApp +91 99405 81843 with the tests you need and your area. We confirm the time slot and price, a trained technician collects the sample at home, and the digital report is sent to you.",
  },
  {
    q: "Is this an emergency service?",
    a: "No. BSB Health Care is not an emergency service. In an emergency, call 108.",
  },
];

/* ----------------------------------------------------------------------------
 * 17. TESTIMONIALS – REAL ONES ONLY. Section is hidden while this list is empty.
 *     Template:
 *     { name: "…", area: "Velachery", program: "POCT Training", quote: "…", photo: images-like object (optional) }
 * ------------------------------------------------------------------------- */
export type Testimonial = {
  name: string;
  area: string;
  program: string;
  quote: string;
  photo?: Img;
};
// [CONFIRM: add 3–6 real, consented testimonials – never invent]
export const testimonials: Testimonial[] = [];
// [CONFIRM: optional YouTube video ID of a real student / patient story]
export const testimonialVideoId: string | null = null;

/* ----------------------------------------------------------------------------
 * 18. HOME – other section headings, CTA
 * ------------------------------------------------------------------------- */
export const homeSections = {
  learnIntro: "Seven essential point-of-care tests, practised hands-on with real equipment.",
  homeCareIntro: "Trusted health services at your doorstep across Chennai.",
  learnTitle: "What you will learn",
  learnTa: "என்ன கற்றுக்கொள்வீர்கள்",
  coursesTitle: "Our courses",
  coursesTa: "எங்கள் படிப்புகள்",
  homeCareTitle: "Home health care services",
  homeCareTa: "வீட்டிலேயே சுகாதார சேவைகள்",
  diabetesBand: {
    title: "The Complete Diabetic Care",
    ta: "முழுமையான நீரிழிவு பராமரிப்பு",
    text: "Seven pillars of care — from education to emotional support — brought to your home in Chennai.",
    cta: "Explore Complete Diabetic Care",
  },
  legacy: {
    title: "A legacy of service",
    ta: "சேவையின் பாரம்பரியம்",
    text: "From the laboratories of Madras Medical College to community health camps, a career built on careful work and care for people.",
    cta: "See the full story & legacy",
  },
  galleryTitle: "Gallery",
  galleryTa: "புகைப்படங்கள்",
  galleryIntro: "Training sessions, health camps and moments from the lab.",
  testimonialsTitle: "Student & patient stories",
  testimonialsTa: "மாணவர் & நோயாளர் அனுபவங்கள்",
  faqTitle: "Frequently asked questions",
  faqTa: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
  finalCta: {
    ta: "உங்கள் எதிர்காலத்தை உருவாக்குங்கள்!",
    en: "Build your future!",
    text: "Call or WhatsApp us today to join the next batch or book a home health care visit.",
  },
};

/* ----------------------------------------------------------------------------
 * 19. CONTACT
 * ------------------------------------------------------------------------- */
export const contact = {
  h1: "Contact BSB Health Care – Chennai",
  ta: "எங்களைத் தொடர்பு கொள்ளுங்கள்",
  intro: "Call, WhatsApp or visit us. We reply to every message — usually within a few hours during working hours.",
  directionsTitle: "Directions",
  directions:
    "We are at #35, Jawaharlal Nehru Salai, Ekkattuthangal, Chennai 600032 (Ultra Scans & Labs building). Nearest landmark: Ambal Nagar Bus Stop, Ekkattuthangal.",
  needs: ["Training", "Blood test", "Nursing", "Physio", "Doctor", "Diet"],
};

/* ----------------------------------------------------------------------------
 * 20. LEGAL PAGES  (have a lawyer review before launch)
 * ------------------------------------------------------------------------- */
export type LegalSection = { id?: string; heading: string; body: string[] };
export type LegalPage = { h1: string; updated: string; intro: string; sections: LegalSection[] };

const legalUpdated = "[CONFIRM: date of last update]";

export const legal: Record<"privacy" | "terms" | "refund", LegalPage> = {
  privacy: {
    h1: "Privacy Policy",
    updated: legalUpdated,
    intro: `This policy explains how ${site.name} (“we”, “us”) handles personal information when you use this website or contact us.`,
    sections: [
      {
        heading: "What information we collect",
        body: [
          "When you use our enquiry or application forms we ask only for basic details such as your name, phone number, the course or service you are interested in, your area and, for applications, your qualification.",
          "We do not collect payment card details on this website, and we do not use the forms to collect Aadhaar numbers or medical records.",
        ],
      },
      {
        heading: "How forms and WhatsApp work",
        body: [
          "Our forms do not store your details on our server. When you submit a form, your browser opens WhatsApp with a pre-filled message containing what you entered. Nothing is sent until you press “Send” in WhatsApp.",
          "Once you message us, the conversation is handled through WhatsApp and is also subject to WhatsApp’s own privacy policy.",
        ],
      },
      {
        heading: "How we use your information",
        body: [
          "We use your details only to reply to your enquiry, confirm admissions or home-care bookings and share reports or updates you have asked for.",
          "We do not sell your information. We do not share it with third parties except where needed to provide the service you requested (for example, a laboratory processing your blood sample) or where the law requires.",
        ],
      },
      {
        heading: "Analytics and cookies",
        body: [
          "If enabled, we use Google Analytics (GA4) to understand how many people visit the site and click the Call, WhatsApp and Apply buttons. This data is aggregated and does not identify you personally. We do not show cookie pop-ups that block the site; you can disable analytics cookies in your browser settings.",
        ],
      },
      {
        heading: "Health information",
        body: [
          "For home-care services we may receive health information such as test reports or prescriptions that you choose to send. We keep this confidential and use it only to deliver the service you requested.",
        ],
      },
      {
        heading: "Retention and your rights",
        body: [
          "We keep enquiry and booking messages only as long as needed for service, record-keeping and legal obligations. You may ask us to correct or delete your information at any time by contacting us.",
        ],
      },
      {
        heading: "Contact us",
        body: [
          `Questions about privacy? Call or WhatsApp ${site.phoneDisplay} or email ${site.email}.`,
        ],
      },
    ],
  },
  terms: {
    h1: "Terms of Use & Medical Disclaimer",
    updated: legalUpdated,
    intro: `By using this website and our services you agree to these terms. ${site.name} offers training (BSB Health Skills Academy) and home health care services (BSB Home Health Care).`,
    sections: [
      {
        heading: "Use of this website",
        body: [
          "The content on this website is provided for general information. We try to keep it accurate, but fees, batch dates and service availability may change; please confirm by call or WhatsApp before paying or booking.",
        ],
      },
      {
        heading: "Training courses",
        body: [
          "Admission is confirmed only after registration and payment of the applicable fee. A Certificate of completion is issued on completing the course requirements. We provide placement support; jobs depend on performance and availability and are not guaranteed.",
          "Skills learned in our courses are for screening, monitoring and support. They do not qualify a person to diagnose disease, prescribe medicines or practise as a registered medical professional.",
        ],
      },
      {
        heading: "Home health care services",
        body: [
          "Services are provided at the agreed time and place after confirming the charges. Medicines are administered only as prescribed by a registered doctor. Doctor consultations are provided by registered allopathic doctors.",
        ],
      },
      {
        id: "medical-disclaimer",
        heading: "Medical disclaimer",
        body: [
          disclaimers.emergency,
          disclaimers.medical,
          disclaimers.supplements,
          "Always consult a registered doctor about your own health. Do not delay or stop treatment because of information on this website.",
        ],
      },
      {
        heading: "Limitation of liability",
        body: [
          "To the extent permitted by law, we are not liable for losses arising from reliance on information on this website. Nothing in these terms limits any liability that cannot be excluded by law.",
        ],
      },
      {
        heading: "Changes and governing law",
        body: [
          "We may update these terms from time to time. These terms are governed by the laws of India, and courts in Chennai, Tamil Nadu have jurisdiction. [CONFIRM: legal review]",
        ],
      },
    ],
  },
  refund: {
    h1: "Refund Policy for Course Fees",
    updated: legalUpdated,
    intro:
      "We want every student to join with confidence. This policy explains when course fees can be refunded. Please read it before paying.",
    sections: [
      {
        heading: "Before the batch starts",
        body: [
          "If you cancel before the batch start date, you may request a refund of the course fee. [CONFIRM: refund window and any deduction, e.g. registration fee non-refundable]",
        ],
      },
      {
        heading: "After the batch starts",
        body: [
          "[CONFIRM: refund terms after the first class, e.g. full / partial / no refund]",
          "If we cancel or postpone a batch, you can choose a refund of the full fee paid or transfer to the next batch.",
        ],
      },
      {
        heading: "Equipment kits",
        body: ["[CONFIRM: refund or return terms for equipment kits supplied with the Health Assistant for Diabetics course]"],
      },
      {
        heading: "How to request a refund",
        body: [
          `Call or WhatsApp ${site.phoneDisplay} or email ${site.email} with your name, course and payment details. Approved refunds are returned to the original payment method within [CONFIRM: number of working days] working days.`,
        ],
      },
    ],
  },
};

/* ----------------------------------------------------------------------------
 * 21. UI STRINGS – buttons, labels, headings shared by pages (translated in content.ta.ts)
 * ------------------------------------------------------------------------- */
export const ui = {
  skip: "Skip to content",
  home: "Home",
  breadcrumb: "Breadcrumb",
  mainNav: "Main",
  mobileNav: "Mobile",
  quickActions: "Quick actions",
  menuOpen: "Open menu",
  menuClose: "Close menu",
  language: "Language",
  call: "Call",
  callAria: "Call BSB Health Care",
  whatsapp: "WhatsApp",
  whatsappUs: "WhatsApp us",
  apply: "Apply",
  applyAria: "Apply for training on WhatsApp",
  applyTraining: "Apply for Training",
  chatWhatsApp: "Chat with us on WhatsApp",
  navAcademy: "Academy",
  navHomeCare: "Home Care",
  navDiabetesCare: "Diabetes Care",
  navAbout: "About & Legacy",
  navContact: "Contact",
  navAdmissions: "Admissions & Fees",
  phoneLabel: "Phone / WhatsApp:",
  emailLabel: "Email:",
  hoursLabel: "Hours:",
  rights: "All rights reserved.",
  footerAcademy: "Academy",
  footerHomeCare: "Home Care",
  footerCompany: "Company",
  footerLegal: "Legal",
  founderCaption: "Founder, BSB Health Care",
  founderName: "M.R. Balachandran",
  preferTalk: "Prefer to talk?",
  trustLabel: "Why families trust BSB",
  seeSyllabus: "See the full syllabus",
  duration: "Duration",
  mode: "Mode",
  fee: "Fee",
  courseDetails: "Course details",
  feesDetails: "Fees & admission details",
  viewService: "View service",
  vintageCaption: "Vintage archive — memories from the early decades of service.",
  mmcCaption: "Wall of directors, Institute of Obstetrics & Gynaecology, MMC.",
  notEndorsements: "Memories & associations — shown for context, not as endorsements of BSB Health Care.",
  videoTitle: "BSB Health Care student and patient story",
  playVideo: "Play video",
  mapTitle: "Map showing BSB Health Care – Chennai, Ekkattuthangal",
  inShort: "In short",
  askQuestion: "Ask a question",
  askWhatsApp: "Ask on WhatsApp",
  applyPoct: "Apply for POCT Training",
  applyCourse: "Apply for this course",
  founderStoryLink: "Read the founder’s story",
  legacyLink: "See his legacy & portfolio",
  feesHowToJoin: "Fees & how to join",
  alsoHomeCare: "Also see our home care services",
  overview: "Overview",
  whoCanJoin: "Who can join?",
  partOfAcademy: "Part of BSB Health Skills Academy",
  module: "Module",
  whatItIs: "What it is",
  whyMatters: "Why it matters",
  willPractise: "What you will practise",
  schedule: "Schedule",
  admissionProcess: "Admission process & documents",
  courseOverview: "Course overview",
  feeDetailsFor: "Fee details for each course:",
  readRefund: "Read the refund policy",
  applicationHeading: "Application – BSB Health Skills Academy",
  applyOnWhatsApp: "Apply on WhatsApp",
  fullName: "Full name",
  mobileNumber: "Mobile number",
  tenDigit: "10-digit number",
  course: "Course",
  qualification: "Qualification",
  qualificationHint: "e.g. +2 passed",
  noFormTa: "படிவம் வேண்டாமா? நேரடியாக WhatsApp செய்யலாம்.",
  messageDirectly: "Message us directly",
  formLabels: {
    select: "Select…",
    privacyNote: "This opens WhatsApp with your details pre-filled. Nothing is stored on this website.",
    phoneError: "Please enter a valid 10-digit mobile number.",
  },
  gallery: {
    enlarge: "Enlarge photo",
    close: "Close photo viewer",
    prev: "Previous photo",
    next: "Next photo",
    viewer: "Photo viewer",
  },
  book: "Book",
  bookHomeCare: "Book home care",
  areasWeServe: "Areas we serve in Chennai",
  areasNotSure: "Not sure if we cover your street? Message us — we will confirm quickly.",
  caringDiabetes: "Caring for someone with diabetes?",
  caringDiabetesText: "See how our seven pillars of care work together at home.",
  notEmergency: "Not an emergency service",
  whatsIncluded: "What’s included",
  howItWorks: "How it works",
  whoIsItFor: "Who is it for?",
  areasServedChennai: "Areas served in Chennai",
  readDiabetesCare: "Managing diabetes? Read about Complete Diabetic Care at home in Chennai.",
  faqSuffix: "frequently asked questions",
  otherServices: "Other home care services",
  serviceCtaText: "Call or WhatsApp — we confirm the time and price before the visit.",
  talkToTeam: "Talk to our team",
  source: "Source:",
  ourMission: "Our mission",
  pillar: "Pillar",
  whatToDo: "What to do:",
  learnWithUs: "Learn with us",
  exploreAcademy: "Explore the Academy",
  getInTouch: "Get in touch",
  phoneWhatsApp: "Phone / WhatsApp",
  emailLabelPlain: "Email",
  address: "Address",
  hours: "Hours",
  homeCareAreas: "Home care areas",
  sendEnquiry: "Send us your enquiry",
  enquiryIntro: "Fill the form — it opens WhatsApp with your message ready to send.",
  enquiryHeading: "Enquiry – BSB Health Care",
  sendOnWhatsApp: "Send on WhatsApp",
  name: "Name",
  iNeed: "I need",
  areaInChennai: "Area in Chennai",
  areaHint: "e.g. Velachery",
  message: "Message",
  openInMaps: "Open in Google Maps",
  lastUpdated: "Last updated:",
  notFoundTitle: "We couldn’t find that page",
  notFoundText: "The page may have moved. Try one of these links or call us directly.",
  goHome: "Go to home page",
};
