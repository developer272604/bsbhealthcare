import { NotFoundView } from "@/views/NotFoundView";

export const metadata = { title: "பக்கம் கிடைக்கவில்லை | BSB ஹெல்த் கேர் – சென்னை", robots: { index: false } };

export default function NotFound() {
  return <NotFoundView lang="ta" />;
}
