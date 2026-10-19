import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceView } from "@/views/ServiceView";
import { homeCare } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return homeCare.services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service } = await params;
  const s = homeCare.services.find((x) => x.slug === service);
  return s ? pageMetadata(s.href, "ta") : {};
}

export default async function Page({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  if (!homeCare.services.some((x) => x.slug === service)) notFound();
  return <ServiceView lang="ta" slug={service} />;
}
