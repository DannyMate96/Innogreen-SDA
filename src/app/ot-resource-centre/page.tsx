import type { Metadata } from "next";
import OTResourceContent from "./OTResourceContent";

export const metadata: Metadata = {
  title: "OT Resource Centre - Occupational Therapy for NDIS Participants",
  description:
    "Your guide to occupational therapy services in Perth. Learn how OT assessments, home modifications, and assistive technology can support your NDIS goals.",
  alternates: {
    canonical: "https://innogreen.net.au/ot-resource-centre",
  },
};

export default function OTResourceCentrePage() {
  return <OTResourceContent />;
}
