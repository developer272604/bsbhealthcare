import Image from "next/image";
import type { Img } from "@/lib/content";
import { cn } from "@/lib/utils";

/** next/image wrapper: fixed intrinsic size prevents layout shift. */
export function Photo({
  img,
  className,
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
  rounded = true,
}: {
  img: Img;
  className?: string;
  priority?: boolean;
  sizes?: string;
  rounded?: boolean;
}) {
  return (
    <Image
      src={img.src}
      alt={img.alt}
      width={img.w}
      height={img.h}
      sizes={sizes}
      priority={priority}
      quality={75}
      className={cn("h-auto w-full object-cover", rounded && "rounded-2xl", className)}
    />
  );
}
