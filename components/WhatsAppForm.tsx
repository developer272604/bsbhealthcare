"use client";

import { useEffect, useId, useRef, useState } from "react";
import { trackEvent } from "./Analytics";
import { btnClass } from "./btn";
import { Icon, WhatsAppIcon } from "./Icon";

export type FieldKind = "name" | "phone" | "text" | "area" | "message" | "select";

export type FormField = {
  name: string;
  label: string;
  kind: FieldKind;
  options?: string[];
  required?: boolean;
  placeholder?: string;
};

export type FormLabels = {
  select: string;
  privacyNote: string;
  phoneError: string;
  required: string;
  chooseOne: string;
  invalidName: string;
  invalidText: string;
  tooShort: string;
  charsLeft: string;
};

/* ------------------------------------------------------------------ rules ---- */
// Unicode-aware (Tamil letters + vowel signs are \p{L} / \p{M}).
const RULES: Record<Exclude<FieldKind, "select">, { max: number; min: number; allowed: RegExp; pattern?: RegExp }> = {
  name: { max: 60, min: 2, allowed: /[^\p{L}\p{M}\s.'’-]/gu },
  phone: { max: 10, min: 10, allowed: /\D/g, pattern: /^[6-9]\d{9}$/ },
  text: { max: 40, min: 2, allowed: /[^\p{L}\p{M}\p{N}\s+.,()/&'’-]/gu },
  area: { max: 40, min: 2, allowed: /[^\p{L}\p{M}\p{N}\s.,/&'’-]/gu },
  message: { max: 300, min: 2, allowed: /[^\p{L}\p{M}\p{N}\s.,!?:;'"’()+&%@#/-]/gu },
};

/** Remove characters that are not allowed for the field, as the user types or pastes. */
function sanitize(kind: Exclude<FieldKind, "select">, raw: string): string {
  const r = RULES[kind];
  let v = raw.replace(r.allowed, "");
  if (kind === "phone") {
    // accept pasted "+91 99405 81843", "091…", "99405-81843"
    if (v.length > 10 && v.startsWith("91")) v = v.slice(2);
    if (v.length > 10 && v.startsWith("0")) v = v.slice(1);
  } else {
    v = v.replace(/\s{2,}/g, " ").replace(/^\s+/, "");
  }
  return v.slice(0, r.max);
}

function validate(f: FormField, value: string, L: FormLabels): string {
  const v = value.trim();
  if (f.kind === "select") return f.required && !v ? L.chooseOne : "";
  if (!v) return f.required ? L.required : "";
  const r = RULES[f.kind];
  if (f.kind === "phone") return r.pattern!.test(v) ? "" : L.phoneError;
  if (v.length < r.min) return L.tooShort;
  if (f.kind === "name" && !/[\p{L}]{2,}/u.test(v)) return L.invalidName;
  if (f.kind !== "name" && !/[\p{L}\p{N}]/u.test(v)) return L.invalidText;
  return "";
}

/* ------------------------------------------------------ themed dropdown ---- */
function ThemedSelect({
  id,
  options,
  value,
  placeholder,
  invalid,
  describedBy,
  onChange,
  onBlurField,
}: {
  id: string;
  options: string[];
  value: string;
  placeholder: string;
  invalid: boolean;
  describedBy?: string;
  onChange: (v: string) => void;
  onBlurField: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const wrap = useRef<HTMLDivElement>(null);
  const listId = `${id}-list`;

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node)) {
        setOpen(false);
        onBlurField();
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open, onBlurField]);

  function choose(i: number) {
    onChange(options[i]);
    setOpen(false);
    onBlurField();
  }

  function onKeyDown(e: React.KeyboardEvent) {
    const last = options.length - 1;
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        setActive(Math.max(0, options.indexOf(value)));
      } else setActive((a) => (e.key === "ArrowDown" ? Math.min(last, a + 1) : Math.max(0, a - 1)));
    } else if (e.key === "Home" && open) {
      e.preventDefault();
      setActive(0);
    } else if (e.key === "End" && open) {
      e.preventDefault();
      setActive(last);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        setActive(Math.max(0, options.indexOf(value)));
      } else if (active >= 0) choose(active);
    } else if (e.key === "Escape" && open) {
      e.preventDefault();
      setOpen(false);
    } else if (e.key === "Tab" && open) {
      setOpen(false);
    }
  }

  return (
    <div ref={wrap} className="relative mt-1">
      <button
        type="button"
        id={id}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-invalid={invalid || undefined}
        aria-describedby={describedBy}
        aria-activedescendant={open && active >= 0 ? `${id}-opt-${active}` : undefined}
        onClick={() => {
          setOpen((o) => !o);
          setActive(Math.max(0, options.indexOf(value)));
        }}
        onKeyDown={onKeyDown}
        className={`flex min-h-11 w-full items-center justify-between gap-2 rounded-lg border bg-white px-3 py-2 text-left text-base transition-colors hover:border-navy focus-visible:border-navy ${
          invalid ? "border-brand-red" : "border-navy/25"
        } ${value ? "text-ink" : "text-muted"}`}
      >
        <span className="truncate">{value || placeholder}</span>
        <Icon name="chevron" className={`h-5 w-5 shrink-0 text-navy transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-labelledby={id}
          className="absolute z-30 mt-1 max-h-64 w-full overflow-auto rounded-xl border border-navy/15 bg-white p-1.5 shadow-card"
        >
          {options.map((o, i) => {
            const selected = o === value;
            return (
              <li
                key={o}
                id={`${id}-opt-${i}`}
                role="option"
                aria-selected={selected}
                onMouseEnter={() => setActive(i)}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => choose(i)}
                className={`flex min-h-11 cursor-pointer items-center justify-between gap-2 rounded-lg px-3 py-2 text-base transition-colors ${
                  selected ? "bg-navy font-semibold text-white" : active === i ? "bg-mint text-navy" : "text-ink"
                }`}
              >
                <span>{o}</span>
                {selected && <Icon name="check" className="h-5 w-5 shrink-0 text-gold" />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------- form ---- */
/**
 * Form with no backend: on submit it opens WhatsApp with a pre-filled message built from the fields.
 * Every field is validated and restricted (letters-only names, 10-digit Indian mobile numbers, length limits,
 * no markup characters) and nothing is stored or sent until the user presses "Send" in WhatsApp.
 */
export function WhatsAppForm({
  fields,
  heading,
  submitLabel,
  event,
  where,
  whatsappNumber,
  labels,
  showIcon = true,
}: {
  fields: FormField[];
  heading: string;
  submitLabel: string;
  event: "click_apply" | "click_whatsapp";
  where: string;
  whatsappNumber: string;
  labels: FormLabels;
  showIcon?: boolean;
}) {
  const uid = useId();
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const idOf = (f: FormField) => `${uid}-${f.name}`;
  const set = (f: FormField, v: string) => {
    setValues((s) => ({ ...s, [f.name]: v }));
    // clear an existing error as soon as the value becomes valid
    if (errors[f.name] && !validate(f, v, labels)) setErrors((e) => ({ ...e, [f.name]: "" }));
  };
  const check = (f: FormField) => setErrors((e) => ({ ...e, [f.name]: validate(f, values[f.name] ?? "", labels) }));

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next: Record<string, string> = {};
    for (const f of fields) next[f.name] = validate(f, values[f.name] ?? "", labels);
    setErrors(next);
    const firstBad = fields.find((f) => next[f.name]);
    if (firstBad) {
      document.getElementById(idOf(firstBad))?.focus();
      return;
    }
    const lines = fields
      .map((f) => {
        const v = (values[f.name] ?? "").trim().replace(/\s+/g, " ");
        return v ? `${f.label}: ${f.kind === "phone" ? `+91 ${v}` : v}` : "";
      })
      .filter(Boolean);
    trackEvent(event, { location: where, page_path: window.location.pathname });
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`${heading}\n${lines.join("\n")}`)}`, "_blank", "noopener,noreferrer");
  }

  const input = (bad: boolean) =>
    `mt-1 block min-h-11 w-full rounded-lg border bg-white px-3 py-2 text-base text-ink transition-colors hover:border-navy focus:border-navy ${bad ? "border-brand-red" : "border-navy/25"}`;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4" aria-label={heading}>
      {fields.map((f) => {
        const id = idOf(f);
        const err = errors[f.name];
        const errId = `${id}-err`;
        const value = values[f.name] ?? "";
        return (
          <div key={f.name}>
            <label htmlFor={id} className="block text-sm font-semibold text-navy">
              {f.label}
              {f.required && <span className="text-brand-red"> *</span>}
            </label>

            {f.kind === "select" ? (
              <ThemedSelect
                id={id}
                options={f.options ?? []}
                value={value}
                placeholder={labels.select}
                invalid={!!err}
                describedBy={err ? errId : undefined}
                onChange={(v) => set(f, v)}
                onBlurField={() => check(f)}
              />
            ) : f.kind === "message" ? (
              <>
                <textarea
                  id={id}
                  name={f.name}
                  rows={3}
                  value={value}
                  maxLength={RULES.message.max}
                  placeholder={f.placeholder}
                  aria-invalid={!!err || undefined}
                  aria-describedby={err ? errId : undefined}
                  onChange={(e) => set(f, sanitize("message", e.target.value))}
                  onBlur={() => check(f)}
                  className={input(!!err)}
                />
                <p className="mt-1 text-right text-xs text-muted">
                  {RULES.message.max - value.length} {labels.charsLeft}
                </p>
              </>
            ) : (
              <input
                id={id}
                name={f.name}
                type={f.kind === "phone" ? "tel" : "text"}
                value={value}
                maxLength={RULES[f.kind].max}
                placeholder={f.placeholder}
                inputMode={f.kind === "phone" ? "numeric" : "text"}
                autoComplete={f.kind === "phone" ? "tel-national" : f.kind === "name" ? "name" : "off"}
                aria-invalid={!!err || undefined}
                aria-describedby={err ? errId : undefined}
                onChange={(e) => set(f, sanitize(f.kind as Exclude<FieldKind, "select">, e.target.value))}
                onBlur={() => check(f)}
                className={input(!!err)}
              />
            )}

            {err && (
              <p id={errId} role="alert" className="mt-1 text-sm font-semibold text-brand-red">
                {err}
              </p>
            )}
          </div>
        );
      })}

      <button type="submit" className={`${btnClass("green", "lg")} w-full`}>
        {showIcon && <WhatsAppIcon className="h-5 w-5" />}
        {submitLabel}
      </button>
      <p className="text-xs text-muted">{labels.privacyNote}</p>
    </form>
  );
}
