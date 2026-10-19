import { LegalView } from "@/views/LegalView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/privacy-policy", "ta");

export default function Page() {
  return <LegalView lang="ta" kind="privacy" path="/privacy-policy" />;
}
