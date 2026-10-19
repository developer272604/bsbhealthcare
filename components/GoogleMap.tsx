import { site } from "@/lib/content";

/** Lazy-loaded Google Map embed (fixed aspect-ratio box, so no layout shift). */
export function GoogleMap({ title, className = "" }: { title: string; className?: string }) {
  return (
    <div className={`aspect-[4/3] w-full overflow-hidden rounded-2xl border border-navy/10 bg-mint sm:aspect-[16/9] ${className}`}>
      <iframe
        src={site.mapsEmbed}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="h-full w-full border-0"
      />
    </div>
  );
}
