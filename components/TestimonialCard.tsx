import Image from "next/image";
import type { Testimonial } from "@/lib/content";

/** A single real testimonial. Only render genuine, consented content. */
export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-5 shadow-card md:p-6">
      <blockquote className="flex-1 text-base text-ink">
        <span aria-hidden="true" className="mr-1 text-3xl font-black leading-none text-gold">
          “
        </span>
        {t.quote}
      </blockquote>
      <figcaption className="mt-4 flex items-center gap-3">
        {t.photo && (
          <Image src={t.photo.src} alt={t.photo.alt} width={48} height={48} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
        )}
        <div>
          <p className="font-bold text-navy">{t.name}</p>
          <p className="text-sm text-muted">
            {t.area} · {t.program}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
