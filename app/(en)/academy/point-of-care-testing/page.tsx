import { PoctView } from "@/views/PoctView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/academy/point-of-care-testing", "en");

export default function Page() {
  return <PoctView lang="en" />;
}
