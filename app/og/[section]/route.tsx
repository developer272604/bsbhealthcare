import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { ogSections, site } from "@/lib/content";

// One 1200×630 Open Graph image per section, generated at build time.
// (Default OG font is Latin-only, so these images use English text.)
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(ogSections).map((section) => ({ section }));
}

// Logo is inlined as a data URL (read once at build time) so the OG image never depends on a network fetch.
const LOGO = `data:image/png;base64,${readFileSync(join(process.cwd(), "public/images/logo.png")).toString("base64")}`;

export async function GET(_req: Request, { params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const s = ogSections[section] ?? ogSections.home;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "linear-gradient(135deg, #0B2A6F 0%, #091F55 100%)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO} alt="" width={300} height={107} />
          <div style={{ fontSize: 34, fontWeight: 700, color: "#F2B705" }}>{site.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.1 }}>{s.heading}</div>
          <div style={{ fontSize: 36, marginTop: 24, color: "#F2B705" }}>{s.sub}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30, color: "rgba(255,255,255,0.85)" }}>
          <div>{site.tagline}</div>
          <div>{site.phoneDisplay}</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
