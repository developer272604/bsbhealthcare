import { LegalView } from "@/views/LegalView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/refund-policy", "ta");

export default function Page() {
  return <LegalView lang="ta" kind="refund" path="/refund-policy" />;
}
