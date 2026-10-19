import { HaView } from "@/views/HaView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/academy/health-assistant-for-diabetics", "en");

export default function Page() {
  return <HaView lang="en" />;
}
