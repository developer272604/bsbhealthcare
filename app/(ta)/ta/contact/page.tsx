import { ContactView } from "@/views/ContactView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/contact", "ta");

export default function Page() {
  return <ContactView lang="ta" />;
}
