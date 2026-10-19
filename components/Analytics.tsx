"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Fire a GA4 event (no-op when GA is not configured). */
export function trackEvent(name: string, params: Record<string, string> = {}) {
  window.gtag?.("event", name, params);
}

/**
 * GA4 loader + one delegated click listener. Any element with `data-track="click_call|click_whatsapp|click_apply"`
 * (and optional `data-track-location`) sends a GA4 event – pages stay server-rendered.
 */
export function Analytics({ gaId }: { gaId: string }) {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-track]");
      if (!el) return;
      trackEvent(el.dataset.track!, {
        location: el.dataset.trackLocation ?? "unknown",
        page_path: window.location.pathname,
      });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!gaId) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${gaId}',{anonymize_ip:true});`}
      </Script>
    </>
  );
}
