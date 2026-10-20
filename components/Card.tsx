import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon } from "./Icon";
import { Ta, Txt } from "./Txt";

export function Card({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <div
      id={id}
      data-reveal
      className={cn(
        "rounded-2xl border border-navy/10 bg-white p-3.5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5 md:p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Icon + title (+ Tamil kicker) + text, optionally a link. */
export function IconCard({
  icon,
  title,
  ta,
  text,
  href,
  linkLabel,
  as: Tag = "h3",
}: {
  icon: string;
  title: string;
  ta?: string;
  text?: string;
  href?: string;
  linkLabel?: string;
  as?: "h2" | "h3";
}) {
  return (
    <Card className="flex h-full flex-col">
      <span className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-mint text-brand-green-dark sm:mb-3 sm:h-12 sm:w-12">
        <Icon name={icon} className="h-6 w-6 sm:h-7 sm:w-7" />
      </span>
      {ta && (
        <Ta as="p" className="text-base font-bold text-brand-red">
          {ta}
        </Ta>
      )}
      <Tag className="break-words text-base font-bold leading-snug text-navy sm:text-lg">{title}</Tag>
      {text && (
        <p className="mt-1.5 flex-1 break-words text-xs leading-snug text-muted sm:mt-2 sm:text-sm md:text-base">
          <Txt>{text}</Txt>
        </p>
      )}
      {href && (
        <Link href={href} aria-label={`${linkLabel ?? ""} – ${title}`} className="mt-4 inline-flex min-h-11 items-center gap-1.5 font-semibold text-navy underline-offset-4 hover:underline">
          {linkLabel}
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      )}
    </Card>
  );
}

export function CheckList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("space-y-2.5", className)}>
      {items.map((t) => (
        <li key={t} className="flex gap-3">
          <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-brand-green-dark" />
          <span>
            <Txt>{t}</Txt>
          </span>
        </li>
      ))}
    </ul>
  );
}
