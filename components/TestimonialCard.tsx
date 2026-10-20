import Image from "next/image";
import type { Testimonial } from "@/lib/content";

/** A single testimonial (initial avatar unless a photo is supplied). */
export function TestimonialCard({ t }: { t: Testimonial }) {
  const initial = Array.from(t.name.trim())[0] ?? "";
  return (
    <figure data-reveal className="flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-3.5 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5 md:p-6">
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-gold sm:h-9 sm:w-9" fill="currentColor" aria-hidden="true" focusable="false">
        <path d="M9.6 6C6.5 7 4 9.9 4 13.5V18h6v-6H7c0-2 .9-3.4 2.6-4V6zm9 0C15.5 7 13 9.9 13 13.5V18h6v-6h-3c0-2 .9-3.4 2.6-4V6z" />
      </svg>
      <blockquote className="mt-2 flex-1 break-words text-sm leading-relaxed text-ink sm:text-base">{t.quote}</blockquote>
      <figcaption className="mt-4 flex items-center gap-3 border-t border-navy/10 pt-3">
        {t.photo ? (
          <Image src={t.photo.src} alt={t.photo.alt} width={44} height={44} loading="lazy" className="h-10 w-10 shrink-0 rounded-full object-cover sm:h-11 sm:w-11" />
        ) : (
          <span aria-hidden="true" className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-base font-extrabold text-gold sm:h-11 sm:w-11">
            {initial}
          </span>
        )}
        <div className="min-w-0">
          <p className="text-sm font-bold leading-snug text-navy sm:text-base">{t.name}</p>
          <p className="text-xs leading-snug text-muted">
            {t.area} · {t.program}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
