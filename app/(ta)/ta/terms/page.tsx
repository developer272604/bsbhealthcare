import { LegalView } from "@/views/LegalView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/terms", "ta");

export default function Page() {
  return <LegalView lang="ta" kind="terms" path="/terms" />;
}
