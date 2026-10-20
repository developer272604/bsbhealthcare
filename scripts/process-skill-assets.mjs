// One-off: crops the 7 skill icons + checklist from the glossy icon sheet, converts the trainer cut-out.
//   node scripts/process-skill-assets.mjs
import sharp from "sharp";
const SRC = "C:/Users/vilva/Downloads";

async function cleanAlpha(input, low) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 3; i < data.length; i += 4) {
    const a = data[i];
    data[i] = a <= low ? 0 : Math.min(255, Math.round(((a - low) * 255) / (255 - low)));
  }
  return sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } });
}

// [name, left, top, width, height] in the 1774x887 sheet
const boxes = [
  ["skill-weight", 0, 100, 480, 340],
  ["skill-bmi", 480, 50, 460, 420],
  ["skill-temp", 960, 60, 340, 420],
  ["skill-spo2", 1310, 90, 440, 400],
  ["skill-sugar", 60, 480, 430, 400],
  ["skill-hb", 470, 490, 440, 370],
  ["skill-urine", 930, 490, 400, 380],
  ["skill-syllabus", 1380, 480, 330, 390],
];
for (const [name, left, top, width, height] of boxes) {
  const crop = await sharp(`${SRC}/Glossy 3D Medical Icon Collection.png`).extract({ left, top, width, height }).png().toBuffer();
  const buf = await (await cleanAlpha(crop, 90)).png().toBuffer();
  const info = await sharp(buf).trim({ threshold: 1 }).resize({ width: 260, withoutEnlargement: true }).webp({ quality: 86, alphaQuality: 95, effort: 5 }).toFile(`public/images/${name}.webp`);
  console.log(name, `${info.width}x${info.height}`, `${(info.size / 1024).toFixed(0)} KB`);
}
const t = await sharp(`${SRC}/Medical_Training_with_Health_Monitoring_Tools-removebg-preview.png`).webp({ quality: 85, alphaQuality: 95, effort: 5 }).toFile("public/images/skills-trainer.webp");
console.log("skills-trainer", `${t.width}x${t.height}`, `${(t.size / 1024).toFixed(0)} KB`);
