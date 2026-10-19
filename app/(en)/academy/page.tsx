import { AcademyView } from "@/views/AcademyView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/academy", "en");

export default function Page() {
  return <AcademyView lang="en" />;
}
