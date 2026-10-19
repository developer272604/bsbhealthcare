import { AdmissionsView } from "@/views/AdmissionsView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/admissions", "en");

export default function Page() {
  return <AdmissionsView lang="en" />;
}
