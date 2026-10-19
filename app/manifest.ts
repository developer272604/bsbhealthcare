import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "BSB Health Care",
    description: "Tamil-medium Point-of-Care Testing training and home health care in Chennai.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0B2A6F",
    theme_color: "#0B2A6F",
    lang: "en-IN",
    categories: ["health", "education", "medical"],
    icons: [
      { src: "/icon.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/images/logo-square.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
