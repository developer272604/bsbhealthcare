import { getContent, type Lang } from "@/lib/i18n";
import { telHref, waLink } from "@/lib/utils";
import { Icon, WhatsAppIcon } from "./Icon";

/** Floating WhatsApp button (tablet & desktop). On phones WhatsApp lives in the bottom bar below. */
export function FloatingWhatsApp({ lang }: { lang: Lang }) {
  const { ui, waMessages } = getContent(lang);
  return (
    <a
      href={waLink(waMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      data-track="click_whatsapp"
      data-track-location="floating"
      aria-label={ui.chatWhatsApp}
      className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-brand-green-dark text-white shadow-lg ring-4 ring-white/80 transition hover:scale-105 md:flex"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
}

/** Sticky bottom bar on mobile: [Call] [WhatsApp] [Apply]. */
export function MobileStickyBar({ lang }: { lang: Lang }) {
  const { ui, waMessages } = getContent(lang);
  const item = "flex min-h-14 flex-1 flex-col items-center justify-center gap-0.5 text-xs font-bold text-white";
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 flex border-t border-white/20 bg-navy pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_16px_rgba(0,0,0,0.15)] md:hidden"
      role="navigation"
      aria-label={ui.quickActions}
    >
      <a href={telHref} data-track="click_call" data-track-location="mobile-bar" className={item} aria-label={ui.callAria}>
        <Icon name="phone" className="h-6 w-6" />
        {ui.call}
      </a>
      <a
        href={waLink(waMessages.general)}
        target="_blank"
        rel="noopener noreferrer"
        data-track="click_whatsapp"
        data-track-location="mobile-bar"
        className={`${item} bg-brand-green-dark`}
        aria-label={ui.chatWhatsApp}
      >
        <WhatsAppIcon className="h-6 w-6" />
        {ui.whatsapp}
      </a>
      <a
        href={waLink(waMessages.apply)}
        target="_blank"
        rel="noopener noreferrer"
        data-track="click_apply"
        data-track-location="mobile-bar"
        className={`${item} bg-brand-red`}
        aria-label={ui.applyAria}
      >
        <Icon name="certificate" className="h-6 w-6" />
        {ui.apply}
      </a>
    </div>
  );
}
