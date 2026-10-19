import { LegalView } from "@/views/LegalView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/terms", "en");

export default function Page() {
  return <LegalView lang="en" kind="terms" path="/terms" />;
}
