import { Inter, Noto_Sans_Tamil } from "next/font/google";

// English pages: both fonts are applied AFTER page load (see components/DeferredFonts.tsx)
// so web fonts never delay first paint / LCP.
export const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap", preload: false });
export const noto = Noto_Sans_Tamil({
  subsets: ["tamil"],
  variable: "--font-noto-tamil",
  display: "swap",
  preload: false,
  weight: ["400", "700"],
});
