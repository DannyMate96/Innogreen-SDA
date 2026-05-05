import type { Metadata } from "next";
import SupportCoordinatorsContent from "./SupportCoordinatorsContent";

export const metadata: Metadata = {
  title: "For Support Coordinators - SDA Referrals Perth | Innogreen",
  description:
    "Partner with Innogreen to refer NDIS participants to quality SDA properties in Perth. NDIS registered provider, fast response, smart home expertise, and transparent reporting.",
  alternates: {
    canonical: "https://innogreen.net.au/support-coordinators",
  },
};

export default function SupportCoordinatorsPage() {
  return <SupportCoordinatorsContent />;
}
