"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Img } from "@/lib/content";
import { Icon } from "./Icon";

/** Photo grid with an accessible lightbox built on the native <dialog> element. */
export type GalleryLabels = { enlarge: string; close: string; prev: string; next: string; viewer: string };

export function Gallery({ items, labels }: { items: Img[]; labels: GalleryLabels }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);

  const openAt = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const step = (d: number) => setIndex((i) => (i + d + items.length) % items.length);
  const current = items[index];

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {items.map((img, i) => (
          <li key={img.src}>
            <button
              type="button"
              onClick={() => openAt(i)}
              className="group block w-full overflow-hidden rounded-xl bg-mint"
              aria-label={`${labels.enlarge}: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.w}
                height={img.h}
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                loading="lazy"
                quality={70}
                className="aspect-[4/3] h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="lightbox m-auto max-h-[92dvh] w-[min(96vw,64rem)] overflow-hidden rounded-2xl bg-navy-800 p-0 text-white"
        aria-label={labels.viewer}
        onClick={(e) => e.target === dialogRef.current && dialogRef.current?.close()}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
      >
        <div className="relative">
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            width={current.w}
            height={current.h}
            sizes="96vw"
            quality={80}
            className="max-h-[78dvh] w-full bg-black object-contain"
          />
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label={labels.close}
            className="absolute right-2 top-2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/60 hover:bg-black/80"
          >
            <Icon name="close" className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label={labels.prev}
            className="absolute left-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 rotate-180 items-center justify-center rounded-full bg-black/60 hover:bg-black/80"
          >
            <Icon name="arrow" className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label={labels.next}
            className="absolute right-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 hover:bg-black/80"
          >
            <Icon name="arrow" className="h-6 w-6" />
          </button>
        </div>
        <p className="px-4 py-3 text-sm text-white/90" aria-live="polite">
          {current.alt} <span className="text-white/60">({index + 1}/{items.length})</span>
        </p>
      </dialog>
    </>
  );
}
