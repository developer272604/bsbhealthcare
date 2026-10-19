import { LegalView } from "@/views/LegalView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/refund-policy", "en");

export default function Page() {
  return <LegalView lang="en" kind="refund" path="/refund-policy" />;
}
