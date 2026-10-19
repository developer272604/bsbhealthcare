import { Icon } from "./Icon";
import { Section } from "./Section";

/** AEO: a short, self-contained answer placed high on the page. Exposed as `speakable` in the WebPage schema. */
export function QuickAnswer({ label, text }: { label: string; text: string }) {
  return (
    <Section className="!py-6 md:!py-8">
      <aside
        data-reveal
        data-speakable
        className="flex gap-4 rounded-2xl border-l-4 border-gold bg-gradient-to-r from-gold/15 to-white p-5 shadow-card"
      >
        <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
          <Icon name="check" className="h-5 w-5" />
        </span>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-navy/70">{label}</p>
          <p className="mt-1 text-base font-medium text-ink md:text-lg">{text}</p>
        </div>
      </aside>
    </Section>
  );
}
