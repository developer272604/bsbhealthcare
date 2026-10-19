import { ContactView } from "@/views/ContactView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/contact", "en");

export default function Page() {
  return <ContactView lang="en" />;
}
