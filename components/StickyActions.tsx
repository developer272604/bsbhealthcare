import { getContent, type Lang } from "@/lib/i18n";
import { waLink } from "@/lib/utils";
import { WhatsAppIcon } from "./Icon";

/** Floating WhatsApp button on every screen size. */
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
      className="fixed bottom-5 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-green-dark text-white shadow-lg ring-4 ring-white/80 transition hover:scale-105"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
}

