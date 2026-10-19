import { AboutView } from "@/views/AboutView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/about", "en");

export default function Page() {
  return <AboutView lang="en" />;
}
