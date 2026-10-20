"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";

/**
 * Swipeable testimonial carousel: native scroll-snap (touch swipe, trackpad, keyboard) + Previous / Next buttons.
 * Children must be the slides (<li>). Buttons disable at either end.
 */
export function TestimonialSlider({
  children,
  labels,
}: {
  children: React.ReactNode;
  labels: { prev: string; next: string; region: string };
}) {
  const track = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    update();
    const el = track.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  function go(dir: 1 | -1) {
    const el = track.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const step = first ? first.getBoundingClientRect().width + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }

  const btn =
    "inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-navy bg-white text-navy transition hover:bg-navy hover:text-white disabled:cursor-not-allowed disabled:border-navy/20 disabled:text-navy/30 disabled:hover:bg-white";

  return (
    <div role="region" aria-roledescription="carousel" aria-label={labels.region}>
      <div className="mb-4 flex justify-end gap-2">
        <button type="button" onClick={() => go(-1)} disabled={atStart} aria-label={labels.prev} className={btn}>
          <Icon name="arrow" className="h-5 w-5 rotate-180" />
        </button>
        <button type="button" onClick={() => go(1)} disabled={atEnd} aria-label={labels.next} className={btn}>
          <Icon name="arrow" className="h-5 w-5" />
        </button>
      </div>
      <ul
        ref={track}
        tabIndex={0}
        className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto scroll-smooth px-4 pb-4 sm:scroll-px-6 [scrollbar-width:none] sm:-mx-6 sm:px-6 [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </ul>
    </div>
  );
}
