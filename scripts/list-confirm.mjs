// Lists every "[CONFIRM: …]" marker in the source so the client can sign each one off.
//   npm run confirm:list     -> prints the list
//   npm run check:launch     -> same, but exits with code 1 if any marker remains (use before go-live)
import fs from "node:fs";
import path from "node:path";

const roots = ["lib", "app", "components", "views"];
const found = [];

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(ts|tsx)$/.test(e.name)) scan(p);
  }
}
function scan(file) {
  const lines = fs.readFileSync(file, "utf8").split(/\r?\n/);
  lines.forEach((line, i) => {
    for (const m of line.matchAll(/\[CONFIRM:[^\]]*\]/g)) {
      found.push({ file: file.replaceAll("\\", "/"), line: i + 1, text: m[0] });
    }
  });
}
roots.forEach((r) => fs.existsSync(r) && walk(r));

// Collapse identical markers so the sign-off list is readable.
const grouped = new Map();
for (const f of found) {
  const g = grouped.get(f.text) ?? [];
  g.push(`${f.file}:${f.line}`);
  grouped.set(f.text, g);
}
console.log(`\n${grouped.size} unique [CONFIRM] items (${found.length} occurrences)\n`);
let n = 1;
for (const [text, where] of grouped) {
  console.log(`${String(n++).padStart(2)}. ${text}\n      ${where.slice(0, 3).join("  ")}${where.length > 3 ? `  (+${where.length - 3} more)` : ""}`);
}
if (process.argv.includes("--fail") && grouped.size > 0) {
  console.error("\nLaunch check FAILED: resolve every [CONFIRM] item in lib/content.ts first.");
  process.exit(1);
}
