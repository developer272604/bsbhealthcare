// Generates branded placeholder images with the EXACT filenames from the client image inventory.
// Existing files are never overwritten – drop real photos into /public/images with the same names.
// Usage: npm run placeholders
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const dir = path.resolve("public/images");
fs.mkdirSync(dir, { recursive: true });

const range = (n, fn) => Array.from({ length: n }, (_, i) => fn(i + 1));
const landscape = [
  "founder-microscope-lab.jpg",
  "mmc-wall-of-directors.jpg",
  "lions-club.jpg",
  "vintage-group-photo.jpg",
  "microscope-cake.jpg",
  "association-kumaresan.jpg",
  "association-rajkumar.jpg",
  "association-ravikumar.jpg",
  "association-ameerjohn.jpg",
  "gts-wellness.jpg",
  ...range(6, (i) => `training-session-${i}.jpg`),
  ...range(4, (i) => `health-camp-${i}.jpg`),
  ...range(3, (i) => `awards-${i}.jpg`),
];
const jobs = [
  { file: "logo.png", w: 512, h: 512, kind: "logo" },
  { file: "founder-portrait.jpg", w: 800, h: 1000, kind: "photo" },
  ...landscape.map((file) => ({ file, w: 1200, h: 800, kind: "photo" })),
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

function photoSvg({ w, h, file }) {
  const label = esc(file);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#EEF8F1"/><stop offset="1" stop-color="#D5E3F7"/></linearGradient></defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <g transform="translate(${w / 2} ${h / 2 - 60})" fill="none" stroke="#0B2A6F" stroke-width="10" stroke-linecap="round" opacity=".55">
    <circle cx="0" cy="-60" r="48"/><path d="M-110 90c0-70 50-110 110-110s110 40 110 110"/>
  </g>
  <text x="50%" y="${h / 2 + 130}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="${Math.round(w / 24)}" font-weight="700" fill="#0B2A6F">PLACEHOLDER IMAGE</text>
  <text x="50%" y="${h / 2 + 130 + Math.round(w / 20)}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="${Math.round(w / 32)}" fill="#D7262E">${label}</text>
</svg>`;
}

function logoSvg({ w, h }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="96" fill="#ffffff"/>
  <circle cx="256" cy="130" r="58" fill="#1E9E4A"/>
  <path d="M96 400c0-96 72-168 160-168s160 72 160 168" fill="none" stroke="#0B2A6F" stroke-width="44" stroke-linecap="round"/>
  <path d="M256 280v110M201 335h110" stroke="#D7262E" stroke-width="30" stroke-linecap="round"/>
  <text x="256" y="480" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="44" font-weight="800" fill="#0B2A6F">BSB (placeholder)</text>
</svg>`;
}

let created = 0;
for (const job of jobs) {
  const out = path.join(dir, job.file);
  if (fs.existsSync(out)) continue;
  const svg = Buffer.from(job.kind === "logo" ? logoSvg(job) : photoSvg(job));
  const img = sharp(svg);
  if (job.file.endsWith(".png")) await img.png({ compressionLevel: 9 }).toFile(out);
  else await img.jpeg({ quality: 70, mozjpeg: true }).toFile(out);
  created++;
}
console.log(`Placeholders created: ${created} (existing files were left untouched)`);
