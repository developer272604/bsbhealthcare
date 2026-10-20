// One-off: crops the five step icons out of the client's icon sheet, removes the soft glow around them,
// and converts the nurse cut-out. Output: public/images/step-1..5.webp, steps-nurse.webp
//   node scripts/process-step-assets.mjs
import sharp from "sharp";

const SRC = "C:/Users/vilva/Downloads";

/** Push faint (glow) pixels to fully transparent and re-stretch the rest of the alpha range. */
async function cleanAlpha(input, low) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 3; i < data.length; i += 4) {
    const a = data[i];
    data[i] = a <= low ? 0 : Math.min(255, Math.round(((a - low) * 255) / (255 - low)));
  }
  return sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } });
}

// crop boxes (left, top, width, height) in the 1536x1024 sheet: number badge + illustration
const boxes = [
  [28, 30, 480, 480],
  [512, 30, 500, 480],
  [1030, 30, 495, 505],
  [290, 548, 480, 440],
  [835, 548, 520, 460],
];
for (let i = 0; i < boxes.length; i++) {
  const [left, top, width, height] = boxes[i];
  const crop = await sharp(`${SRC}/Five-Step Career Journey Icons.png`).extract({ left, top, width, height }).png().toBuffer();
  const cleaned = await cleanAlpha(crop, 150);
  const buf = await cleaned.png().toBuffer();
  const info = await sharp(buf).trim({ threshold: 1 }).resize({ width: 300, withoutEnlargement: true }).webp({ quality: 88, alphaQuality: 95, effort: 5 }).toFile(`public/images/step-${i + 1}.webp`);
  console.log(`step-${i + 1}.webp`, `${info.width}x${info.height}`, `${(info.size / 1024).toFixed(0)} KB`);
}

// nurse
const nurse = await cleanAlpha(await sharp(`${SRC}/Confident Healthcare Professional with Notebooks.png`).resize({ width: 620 }).png().toBuffer(), 120);
const ni = await nurse.webp({ quality: 82, alphaQuality: 95, effort: 5 }).toFile("public/images/steps-nurse.webp");
console.log("steps-nurse.webp", `${ni.width}x${ni.height}`, `${(ni.size / 1024).toFixed(0)} KB`);
