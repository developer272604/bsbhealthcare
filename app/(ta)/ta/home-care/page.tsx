import { HomeCareView } from "@/views/HomeCareView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/home-care", "ta");

export default function Page() {
  return <HomeCareView lang="ta" />;
}
