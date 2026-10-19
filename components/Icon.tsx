import type { ReactNode } from "react";

const paths: Record<string, ReactNode> = {
  scale: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M8 9a4 4 0 0 1 8 0" />
      <path d="M12 9l2-2" />
    </>
  ),
  bmi: (
    <>
      <circle cx="12" cy="5" r="2.5" />
      <path d="M8 21v-6l-2-5h12l-2 5v6" />
      <path d="M10 21v-3m4 3v-3" />
    </>
  ),
  thermometer: (
    <>
      <path d="M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0z" />
      <path d="M12 9v7" />
    </>
  ),
  spo2: (
    <>
      <path d="M2 12h4l2-5 3 10 3-8 2 3h6" />
    </>
  ),
  drop: <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />,
  hb: (
    <>
      <path d="M12 3s5 5.5 5 9.5a5 5 0 0 1-10 0C7 8.5 12 3 12 3z" />
      <path d="M9.5 13h5M12 10.5v5" />
    </>
  ),
  urine: (
    <>
      <path d="M8 3h8M9 3v4l-3 10a3 3 0 0 0 3 4h6a3 3 0 0 0 3-4l-3-10V3" />
      <path d="M7.5 14h9" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="M8.5 14.5L7 21l5-3 5 3-1.5-6.5" />
    </>
  ),
  hospital: (
    <>
      <path d="M4 21V6l8-3 8 3v15M2 21h20" />
      <path d="M12 8v6M9 11h6" />
    </>
  ),
  certificate: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M7 9h10M7 12h6" />
      <path d="M15 17l1 4 2-1 2 1-1-4" />
    </>
  ),
  bank: (
    <>
      <path d="M3 10l9-6 9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 21h18" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16 5a3 3 0 0 1 0 6M18 14c2 .8 3 2.6 3 6" />
    </>
  ),
  language: (
    <>
      <path d="M4 5h9M8.5 3v2M6 5c.5 4 3 7 6 8M12 5c-.5 4-3 7-7 9" />
      <path d="M13 21l4-10 4 10M14.5 17.5h5" />
    </>
  ),
  hands: (
    <>
      <path d="M8 13V6a1.5 1.5 0 0 1 3 0v5M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v8a7 7 0 0 1-7 7h-.5A5.5 5.5 0 0 1 4 15.5V12a1.5 1.5 0 0 1 3 0" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
    </>
  ),
  rocket: (
    <>
      <path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2M14 4c4 0 6 2 6 6-2 4-5 7-9 8l-5-5c1-4 4-7 8-9z" />
      <circle cx="14.5" cy="9.5" r="1.5" />
    </>
  ),
  nurse: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 21c0-4 3-7 7-7s7 3 7 7" />
      <path d="M12 3v2M11 4h2" />
    </>
  ),
  physio: (
    <>
      <circle cx="14" cy="4.5" r="2" />
      <path d="M8 21l3-7 3 1 2 6M11 14l-1-5 5-1 3 4M6 10l4-1" />
    </>
  ),
  stethoscope: (
    <>
      <path d="M6 3v6a4 4 0 0 0 8 0V3M4 3h4M12 3h4" />
      <path d="M10 13v2a5 5 0 0 0 10 0v-2" />
      <circle cx="20" cy="11" r="2" />
    </>
  ),
  apple: (
    <>
      <path d="M12 7c-2-2-7-1-7 5 0 5 3 9 5 9 1 0 1.5-.5 2-.5s1 .5 2 .5c2 0 5-4 5-9 0-6-5-7-7-5z" />
      <path d="M12 7c0-2 1-3 3-4" />
    </>
  ),
  book: (
    <>
      <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5z" />
      <path d="M4 19a2 2 0 0 0 2 2h13" />
    </>
  ),
  pill: (
    <>
      <rect x="2.5" y="9" width="19" height="7" rx="3.5" transform="rotate(-35 12 12.5)" />
      <path d="M9 8.5l5.5 7" />
    </>
  ),
  bandage: (
    <>
      <rect x="2" y="8" width="20" height="8" rx="4" transform="rotate(-45 12 12)" />
      <path d="M10 10h.01M14 10h.01M10 14h.01M14 14h.01" />
    </>
  ),
  run: (
    <>
      <circle cx="15" cy="4.5" r="2" />
      <path d="M5 21l4-6 3 2 1 5M9 15l-1-5 6-2 3 4 3 1M7 9l3-1" />
    </>
  ),
  heart: <path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z" />,
  flask: (
    <>
      <path d="M9 3h6M10 3v6l-5.5 9.5A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-2.5L14 9V3" />
      <path d="M7.5 15h9" />
    </>
  ),
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  map: (
    <>
      <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  check: <path d="M5 12.5l4.5 4.5L19 7" />,
  chevron: <path d="M6 9l6 6 6-6" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      <path d="M8.5 12l2.5 2.5L15.5 10" />
    </>
  ),
  warning: (
    <>
      <path d="M12 3l10 18H2L12 3z" />
      <path d="M12 10v5M12 18h.01" />
    </>
  ),
  home: <path d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9z" />,
};

export const WhatsAppIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.25-1.38A9.9 9.9 0 1 0 12.04 2zm0 1.8a8.1 8.1 0 0 1 6.9 12.3 8.1 8.1 0 0 1-10.9 2.7l-.3-.17-3.1.82.83-3.03-.2-.32A8.1 8.1 0 0 1 12.04 3.8zM8.6 7.5c-.2 0-.5.07-.75.35-.25.28-.97.95-.97 2.3s1 2.7 1.14 2.9c.14.18 1.95 3.1 4.8 4.2 2.4.94 2.88.75 3.4.7.52-.05 1.68-.69 1.92-1.35.23-.66.23-1.23.16-1.35-.07-.12-.26-.19-.54-.33-.28-.14-1.68-.83-1.94-.92-.26-.1-.45-.14-.64.14-.19.28-.73.92-.9 1.1-.16.2-.33.21-.6.07-.3-.14-1.2-.44-2.28-1.4-.84-.75-1.4-1.68-1.57-1.96-.16-.28-.02-.43.12-.57.13-.12.28-.33.42-.5.14-.16.19-.28.28-.47.1-.19.05-.35-.02-.5-.07-.14-.64-1.56-.88-2.13-.23-.55-.47-.48-.64-.48h-.55z" />
  </svg>
);

export function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name] ?? paths.check}
    </svg>
  );
}
