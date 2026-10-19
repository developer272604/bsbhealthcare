"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Elements that fade/slide in as they scroll into view. Only the OUTERMOST match is animated. */
const SELECTOR = "[data-reveal], main section li, main section figure, main section details, main section table, main section form";

/**
 * Scroll animations for every page:
 *  1. reveal-on-scroll (fade + rise, staggered inside grids) using ONE IntersectionObserver;
 *  2. a thin gold scroll-progress bar under the header;
 *  3. a shadow on the header once the page has scrolled.
 *
 * Performance notes: no layout reads (getBoundingClientRect/offsetTop) – the observer itself tells us what is on
 * screen, so content-visibility keeps working. Elements already visible at load are never hidden (no flash, no LCP delay);
 * elements below the fold are hidden only AFTER the first observer callback, and revealed when scrolled into view.
 * Only opacity/transform are animated (no layout shift). Skipped for `prefers-reduced-motion`; content is fully visible without JS.
 */
export function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const bar = document.getElementById("scroll-progress");
    const header = document.getElementById("site-header");

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = max > 0 ? Math.min(1, window.scrollY / max) : 0;
        if (bar && !reduce) bar.style.transform = `scaleX(${ratio})`;
        header?.classList.toggle("shadow-lg", window.scrollY > 8);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    let io: IntersectionObserver | undefined;
    if (!reduce && "IntersectionObserver" in window) {
      const armed = new WeakSet<Element>();
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            const el = e.target as HTMLElement;
            if (!armed.has(el)) {
              // first callback: on screen already → leave it alone; below the fold → arm (hide) it
              if (e.isIntersecting) {
                io?.unobserve(el);
              } else {
                armed.add(el);
                el.classList.add("reveal");
              }
            } else if (e.isIntersecting) {
              el.classList.add("is-in");
              io?.unobserve(el);
            }
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
      );
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
        if (el.parentElement?.closest(SELECTOR)) return; // an ancestor already animates
        const siblings = el.parentElement?.children;
        const idx = siblings ? Array.prototype.indexOf.call(siblings, el) : 0;
        el.style.setProperty("--reveal-delay", `${Math.min(idx, 5) * 70}ms`);
        io!.observe(el);
      });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, [pathname]);

  return <div id="scroll-progress" aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gold" style={{ transform: "scaleX(0)" }} />;
}
