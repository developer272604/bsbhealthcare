import { HomeCareView } from "@/views/HomeCareView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/home-care", "en");

export default function Page() {
  return <HomeCareView lang="en" />;
}
