import type { Viewport } from "next";
import { RootShell } from "@/components/RootShell";
import { inter, noto } from "@/lib/fonts-en";
import { rootMetadata } from "@/lib/metadata";

export const metadata = rootMetadata("en");
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0B2A6F" };

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell lang="en" deferredFontClass={`${inter.variable} ${noto.variable}`}>
      {children}
    </RootShell>
  );
}
