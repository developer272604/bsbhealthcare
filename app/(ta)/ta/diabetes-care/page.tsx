import { DiabetesView } from "@/views/DiabetesView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/diabetes-care", "ta");

export default function Page() {
  return <DiabetesView lang="ta" />;
}
