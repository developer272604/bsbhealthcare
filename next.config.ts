import type { NextConfig } from "next";

/**
 * Two deploy modes, chosen automatically:
 *  - Cloudflare Pages (CF_PAGES=1) or STATIC_EXPORT=1  →  fully static export into ./out
 *    (redirects + headers come from public/_redirects and public/_headers; images are served as-is).
 *  - Vercel / `next start`                              →  normal build with image optimisation, redirects and headers.
 */
const staticExport = process.env.CF_PAGES === "1" || process.env.STATIC_EXPORT === "1";

const base: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  // Inline the (tiny) Tailwind CSS into the HTML so it never blocks first paint.
  experimental: { inlineCss: true },
};

const nextConfig: NextConfig = staticExport
  ? {
      ...base,
      output: "export",
      images: { unoptimized: true },
    }
  : {
      ...base,
      images: {
        formats: ["image/avif", "image/webp"],
        deviceSizes: [360, 640, 768, 1024, 1280, 1536],
        minimumCacheTTL: 60 * 60 * 24 * 30,
      },
      // /portfolio was merged into /about (legacy section) – keep old links and rankings working.
      async redirects() {
        return [
          { source: "/portfolio", destination: "/about", permanent: true },
          { source: "/ta/portfolio", destination: "/ta/about", permanent: true },
        ];
      },
      async headers() {
        return [
          {
            source: "/:path*",
            headers: [
              { key: "X-Content-Type-Options", value: "nosniff" },
              { key: "X-Frame-Options", value: "SAMEORIGIN" },
              { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
              { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
            ],
          },
        ];
      },
    };

export default nextConfig;
