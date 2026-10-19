import { Inter, Noto_Sans_Tamil } from "next/font/google";

// Tamil pages: the Tamil font IS the page text, so it is preloaded and applied immediately.
// "optional" = never swaps (no layout shift); Inter (for Latin words) is deferred.
export const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap", preload: false });
export const noto = Noto_Sans_Tamil({
  subsets: ["tamil"],
  variable: "--font-noto-tamil",
  display: "optional",
  preload: true,
  weight: ["400", "700"],
});
