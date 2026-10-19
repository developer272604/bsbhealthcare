"use client";

import { useId, useState } from "react";
import { trackEvent } from "./Analytics";
import { btnClass } from "./btn";
import { WhatsAppIcon } from "./Icon";

export type FormField = {
  name: string;
  label: string;
  type?: "text" | "tel" | "select" | "textarea";
  options?: string[];
  required?: boolean;
  placeholder?: string;
};

export type FormLabels = { select: string; privacyNote: string; phoneError: string };

/**
 * Form with no backend: on submit it opens WhatsApp with a pre-filled message built from the fields.
 * Nothing is stored or sent until the user presses "Send" in WhatsApp.
 */
export function WhatsAppForm({
  fields,
  heading,
  submitLabel,
  event,
  where,
  whatsappNumber,
  labels,
}: {
  fields: FormField[];
  heading: string;
  submitLabel: string;
  event: "click_apply" | "click_whatsapp";
  where: string;
  whatsappNumber: string;
  labels: FormLabels;
}) {
  const uid = useId();
  const [error, setError] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const phone = String(data.get("phone") ?? "").replace(/[^\d+]/g, "");
    if (phone && phone.replace(/\D/g, "").length < 10) {
      setError(labels.phoneError);
      return;
    }
    setError("");
    const lines = fields
      .map((f) => {
        const v = String(data.get(f.name) ?? "").trim();
        return v ? `${f.label}: ${v}` : "";
      })
      .filter(Boolean);
    const text = `${heading}\n${lines.join("\n")}`;
    trackEvent(event, { location: where, page_path: window.location.pathname });
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  const input =
    "mt-1 block min-h-11 w-full rounded-lg border border-navy/25 bg-white px-3 py-2 text-base text-ink focus:border-navy";

  return (
    <form onSubmit={onSubmit} className="space-y-4" aria-label={heading}>
      {fields.map((f) => {
        const id = `${uid}-${f.name}`;
        return (
          <div key={f.name}>
            <label htmlFor={id} className="block text-sm font-semibold text-navy">
              {f.label}
              {f.required && <span className="text-brand-red"> *</span>}
            </label>
            {f.type === "select" ? (
              <select id={id} name={f.name} required={f.required} defaultValue="" className={input}>
                <option value="" disabled>
                  {labels.select}
                </option>
                {f.options?.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            ) : f.type === "textarea" ? (
              <textarea id={id} name={f.name} required={f.required} rows={3} placeholder={f.placeholder} className={input} />
            ) : (
              <input
                id={id}
                name={f.name}
                type={f.type ?? "text"}
                required={f.required}
                placeholder={f.placeholder}
                inputMode={f.type === "tel" ? "numeric" : undefined}
                autoComplete={f.type === "tel" ? "tel" : f.name === "name" ? "name" : undefined}
                className={input}
              />
            )}
          </div>
        );
      })}
      {error && (
        <p role="alert" className="text-sm font-semibold text-brand-red">
          {error}
        </p>
      )}
      <button type="submit" className={`${btnClass("green", "lg")} w-full`}>
        <WhatsAppIcon className="h-5 w-5" />
        {submitLabel}
      </button>
      <p className="text-xs text-muted">{labels.privacyNote}</p>
    </form>
  );
}
