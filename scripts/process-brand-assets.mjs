// One-off: turns the client's supplied brand files into the site assets.
//   node scripts/process-brand-assets.mjs
// Sources live in the client's Downloads folder; outputs are committed under public/ and app/.
import fs from "node:fs";
import sharp from "sharp";

const SRC = "C:/Users/vilva/Downloads";
const NAVY = { r: 11, g: 42, b: 111, alpha: 1 };

// 1. Founder portrait: crop to 4:5, 800x1000 JPEG
const p = sharp(`${SRC}/Professional Indian Business Portrait.png`);
const pm = await p.metadata();
const cw = Math.round(pm.height * 0.8);
await p
  .extract({ left: Math.round((pm.width - cw) / 2), top: 0, width: cw, height: pm.height })
  .resize(800, 1000)
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile("public/images/founder-portrait.jpg");

// 2. Logo (white + gold on transparent): trim margins, keep transparent for the navy header/footer
const logoBuf = await sharp(`${SRC}/BSB Home Health Care Logo (1).png`).trim().resize({ width: 600 }).png({ palette: true, quality: 90, compressionLevel: 9 }).toBuffer();
fs.writeFileSync("public/images/logo.png", logoBuf);
const lm = await sharp(logoBuf).metadata();
console.log("logo.png", lm.width, lm.height);

// 3. Square logo on navy (schema logo, manifest, social) – always legible on any background
const inner = await sharp(logoBuf).resize({ width: 430 }).toBuffer();
await sharp({ create: { width: 512, height: 512, channels: 4, background: NAVY } })
  .composite([{ input: inner, gravity: "center" }])
  .png({ compressionLevel: 9 })
  .toFile("public/images/logo-square.png");

// 4. Favicon: gold globe on a navy rounded square
const globe = sharp(`${SRC}/Golden Globe Grid Icon.png`).trim();
async function icon(size) {
  const pad = Math.round(size * 0.12);
  const g = await globe.clone().resize(size - pad * 2, size - pad * 2, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
  const bg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${Math.round(size * 0.22)}" fill="#0B2A6F"/></svg>`);
  return sharp(bg).composite([{ input: g, gravity: "center" }]).png({ compressionLevel: 9 }).toBuffer();
}
fs.writeFileSync("app/icon.png", await sharp(await icon(512)).resize(192, 192).png({ palette: true, quality: 85, compressionLevel: 9 }).toBuffer());
fs.writeFileSync("app/apple-icon.png", await icon(180));
const ico32 = await icon(48);
// minimal ICO container wrapping one 48x48 PNG
const hdr = Buffer.alloc(22);
hdr.writeUInt16LE(0, 0); hdr.writeUInt16LE(1, 2); hdr.writeUInt16LE(1, 4);
hdr.writeUInt8(48, 6); hdr.writeUInt8(48, 7); hdr.writeUInt16LE(1, 10); hdr.writeUInt16LE(32, 12);
hdr.writeUInt32LE(ico32.length, 14); hdr.writeUInt32LE(22, 18);
fs.writeFileSync("app/favicon.ico", Buffer.concat([hdr, ico32]));
console.log("done");
