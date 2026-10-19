"use client";

import { useEffect } from "react";

/**
 * Progressive font enhancement. The page first paints with the system font (fast LCP on slow mobile networks);
 * once the page has loaded and the browser is idle, the next/font classes (Inter + Noto Sans Tamil) are added to <html>
 * and the web fonts download. Fonts never compete with the content, images and scripts that matter for first paint.
 */
export function DeferredFonts({ classNames }: { classNames: string }) {
  useEffect(() => {
    const apply = () => document.documentElement.classList.add(...classNames.split(" ").filter(Boolean));
    const schedule = () => {
      if ("requestIdleCallback" in window) window.requestIdleCallback(apply, { timeout: 1500 });
      else setTimeout(apply, 200);
    };
    if (document.readyState === "complete") schedule();
    else {
      window.addEventListener("load", schedule, { once: true });
      return () => window.removeEventListener("load", schedule);
    }
  }, [classNames]);
  return null;
}
