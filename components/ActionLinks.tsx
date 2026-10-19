import { site } from "@/lib/content";
import { getContent, type Lang } from "@/lib/i18n";
import { cn, telHref, waLink } from "@/lib/utils";
import { btnClass, type Variant } from "./btn";
import { Icon, WhatsAppIcon } from "./Icon";

export { btnClass } from "./btn";

type Common = {
  lang: Lang;
  variant?: Variant;
  size?: "md" | "lg";
  className?: string;
  label?: string;
  where?: string;
};

/** Click-to-call button. `data-track` feeds the GA4 click listener (see Analytics.tsx). */
export function CallButton({ lang, variant = "navy", size, className, label, where = "button" }: Common) {
  const { ui } = getContent(lang);
  return (
    <a
      href={telHref}
      className={cn(btnClass(variant, size), className)}
      data-track="click_call"
      data-track-location={where}
      aria-label={label ? undefined : `${ui.call} ${site.phoneDisplay}`}
    >
      <Icon name="phone" className="h-5 w-5" />
      {label ?? `${ui.call} ${site.phoneDisplay}`}
    </a>
  );
}

export function WhatsAppButton({
  lang,
  variant = "green",
  size,
  className,
  label,
  message,
  where = "button",
}: Common & { message?: string }) {
  const c = getContent(lang);
  return (
    <a
      href={waLink(message ?? c.waMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(btnClass(variant, size), className)}
      data-track="click_whatsapp"
      data-track-location={where}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {label ?? c.ui.whatsappUs}
    </a>
  );
}

/** "Apply" CTA – opens WhatsApp with an application message. */
export function ApplyButton({
  lang,
  variant = "red",
  size,
  className,
  label,
  message,
  where = "button",
}: Common & { message?: string }) {
  const c = getContent(lang);
  return (
    <a
      href={waLink(message ?? c.waMessages.apply)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(btnClass(variant, size), className)}
      data-track="click_apply"
      data-track-location={where}
    >
      {label ?? c.ui.applyTraining}
      <Icon name="arrow" className="h-4 w-4" />
    </a>
  );
}
