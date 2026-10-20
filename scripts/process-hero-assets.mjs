// One-off: converts the client's hero artwork (Downloads) into compact WebP files for the home hero.
//   node scripts/process-hero-assets.mjs
import sharp from "sharp";

const SRC = "C:/Users/vilva/Downloads";
const jobs = [
  ["Confident Executive on Transparent Background.png", "hero-executive.webp", 820, 80],
  ["Translucent Blue Abstract Halo.png", "hero-halo.webp", 640, 45],
  ["Modern Blue-Toned Laboratory Workspace.png", "hero-lab.webp", 640, 45],
  ["50 Years of Experience Gold Emblem.png", "hero-emblem.webp", 400, 78],
];
for (const [src, out, width, quality] of jobs) {
  let img = sharp(`${SRC}/${src}`).resize({ width });
  if (out === "hero-lab.webp") {
    // soft radial fade baked into the alpha channel (cheaper than a CSS mask at runtime)
    const buf = await img.ensureAlpha().toBuffer();
    const { width: w, height: h } = await sharp(buf).metadata();
    const mask = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><defs><radialGradient id="g" cx="72%" cy="78%" r="62%" gradientTransform="translate(0 0)"><stop offset="0.4" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>`);
    img = sharp(buf).composite([{ input: mask, blend: "dest-in" }]);
  }
  const info = await img.webp({ quality, alphaQuality: 90, effort: 5 }).toFile(`public/images/${out}`);
  console.log(out, `${info.width}x${info.height}`, `${(info.size / 1024).toFixed(0)} KB`);
}

// ---- "Our courses" / "Why this training" section artwork ----
const section = [
  ["Blue Books and Lush Potted Plant.png", "section-books.webp", 520, 80],
  ["3D Medical Clipboard with Stethoscope and Plant.png", "section-clipboard.webp", 560, 80],
  ["7545d6ae-da24-4fa3-8d36-7aff0d4db482.png", "section-wave.webp", 1600, 55],
];
for (const [src, out, width, quality] of section) {
  const info = await sharp(`${SRC}/${src}`).resize({ width }).webp({ quality, alphaQuality: 90, effort: 5 }).toFile(`public/images/${out}`);
  console.log(out, `${info.width}x${info.height}`, `${(info.size / 1024).toFixed(0)} KB`);
}
