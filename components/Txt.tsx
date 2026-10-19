import { Fragment } from "react";

const RE = /(\[CONFIRM:[^\]]*\])/g;

/** Renders text and highlights any "[CONFIRM: …]" marker so the client can spot items to verify. */
export function Txt({ children, highlight }: { children: string; highlight?: string }) {
  const parts = children.split(RE);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("[CONFIRM:") ? (
          <mark key={i} className="confirm">
            {p}
          </mark>
        ) : highlight && p.includes(highlight) ? (
          <Fragment key={i}>
            {p.split(highlight).map((seg, j, arr) => (
              <Fragment key={j}>
                {seg}
                {j < arr.length - 1 && <mark className="hl">{highlight}</mark>}
              </Fragment>
            ))}
          </Fragment>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
    </>
  );
}

/** Tamil text element (sets lang="ta" so the Tamil font and screen readers pick it up). */
export function Ta({
  children,
  className,
  as: Tag = "span",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "p" | "div" | "h2" | "h3";
}) {
  return (
    <Tag lang="ta" className={className}>
      {children}
    </Tag>
  );
}
