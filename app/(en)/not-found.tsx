import { NotFoundView } from "@/views/NotFoundView";

export const metadata = { title: "Page not found | BSB Health Care – Chennai", robots: { index: false } };

export default function NotFound() {
  return <NotFoundView lang="en" />;
}
