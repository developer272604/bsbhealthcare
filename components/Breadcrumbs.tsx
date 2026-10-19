import Link from "next/link";
import { getContent, lp, type Lang } from "@/lib/i18n";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "./JsonLd";

export type Crumb = { name: string; path: string };

/** Visible breadcrumb trail + BreadcrumbList JSON-LD. "Home" is added automatically. */
export function Breadcrumbs({ trail, light, lang }: { trail: Crumb[]; light?: boolean; lang: Lang }) {
  const { ui } = getContent(lang);
  const all: Crumb[] = [{ name: ui.home, path: "/" }, ...trail];
  return (
    <>
      <nav aria-label={ui.breadcrumb} className={`text-sm ${light ? "text-white/85" : "text-muted"}`}>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.path} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="font-semibold">
                    {c.name}
                  </span>
                ) : (
                  <>
                    <Link href={lp(lang, c.path)} className="inline-flex min-h-6 items-center underline-offset-4 hover:underline">
                      {c.name}
                    </Link>
                    <span aria-hidden="true">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(all.map((c) => ({ ...c, lang })))} />
    </>
  );
}
