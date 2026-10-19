import { AcademyView } from "@/views/AcademyView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/academy", "ta");

export default function Page() {
  return <AcademyView lang="ta" />;
}
