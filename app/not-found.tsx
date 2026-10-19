// Global 404 (used when no language layout matches the URL). Kept minimal: it has its own <html>.
import "./globals.css";

export const metadata = { title: "Page not found | BSB Health Care – Chennai", robots: { index: false } };

export default function GlobalNotFound() {
  return (
    <html lang="en-IN">
      <body>
        <main className="mx-auto max-w-xl px-4 py-24 text-center">
          <p className="text-6xl font-extrabold text-brand-red">404</p>
          <h1 className="mt-2 text-3xl font-extrabold text-navy">We couldn’t find that page / பக்கம் கிடைக்கவில்லை</h1>
          <p className="mt-4 flex justify-center gap-6 font-semibold text-navy">
            <a href="/" className="underline">English home</a>
            <a href="/ta" className="underline">தமிழ் முகப்பு</a>
            <a href="tel:+919940581843" className="underline">+91 99405 81843</a>
          </p>
        </main>
      </body>
    </html>
  );
}
