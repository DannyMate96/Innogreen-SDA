import type { Metadata } from "next";
import SmartHomesContent from "./SmartHomesContent";

export const metadata: Metadata = {
  title: "NDIS Smart Home Technology Perth - Assistive Technology",
  description:
    "Innogreen supplies, installs and integrates NDIS-funded smart home assistive technology in Perth. Voice control, automated doors, video intercoms, smart blinds, and environmental controls for people with disabilities.",
  alternates: {
    canonical: "https://innogreen.net.au/smart-homes",
  },
};

export default function SmartHomesPage() {
  return <SmartHomesContent />;
}
