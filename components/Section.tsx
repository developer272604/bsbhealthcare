import { cn } from "@/lib/utils";
import { Ta } from "./Txt";

export function Section({
  id,
  bg = "white",
  children,
  className,
}: {
  id?: string;
  bg?: "white" | "mint" | "navy";
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-12 md:py-16",
        bg === "mint" && "bg-mint",
        bg === "navy" && "bg-navy text-white",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function SectionHeading({
  title,
  ta,
  intro,
  align = "left",
  as: Tag = "h2",
  light,
}: {
  title: string;
  ta?: string;
  intro?: string;
  align?: "left" | "center";
  as?: "h2" | "h3";
  light?: boolean;
}) {
  return (
    <div data-reveal className={cn("mb-8 max-w-3xl", align === "center" && "mx-auto text-center")}>
      {ta && (
        <Ta as="p" className={cn("mb-1 text-lg font-bold md:text-xl", light ? "text-gold" : "text-brand-red")}>
          {ta}
        </Ta>
      )}
      <Tag className={cn("text-2xl font-extrabold leading-tight md:text-3xl", light ? "text-white" : "text-navy")}>
        {title}
      </Tag>
      <span aria-hidden="true" className={cn("mt-3 block h-1 w-14 rounded-full bg-gold", align === "center" && "mx-auto")} />
      {intro && <p className={cn("mt-3 text-base md:text-lg", light ? "text-white/85" : "text-muted")}>{intro}</p>}
    </div>
  );
}
