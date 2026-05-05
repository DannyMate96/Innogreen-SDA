import type { Metadata } from "next";
import NDISFundingGuideContent from "./NDISFundingGuideContent";

export const metadata: Metadata = {
  title: "NDIS Funding Guide — Home Modifications, AT & SDA | Innogreen Perth",
  description:
    "Understand NDIS Capital Supports, Assistive Technology, Home Modifications, and SDA funding in Australia. Plain-language guide from Innogreen, Perth's registered NDIS provider.",
  alternates: {
    canonical: "https://innogreen.net.au/ndis-funding-guide",
  },
};

export default function NDISFundingGuidePage() {
  return <NDISFundingGuideContent />;
}
