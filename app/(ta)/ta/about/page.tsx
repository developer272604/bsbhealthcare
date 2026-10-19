import { AboutView } from "@/views/AboutView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/about", "ta");

export default function Page() {
  return <AboutView lang="ta" />;
}
