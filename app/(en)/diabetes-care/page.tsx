import { DiabetesView } from "@/views/DiabetesView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/diabetes-care", "en");

export default function Page() {
  return <DiabetesView lang="en" />;
}
