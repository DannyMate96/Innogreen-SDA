import type { Metadata } from "next";
import PropertyManagementContent from "./PropertyManagementContent";

export const metadata: Metadata = {
  title: "Property Management Perth - Long Term & Short Term Rentals",
  description:
    "Innogreen offers full-service property management in Perth — long-term leasing and short-term Airbnb management with a 4.8-star rating and 85% occupancy rate.",
  alternates: {
    canonical: "https://innogreen.net.au/property-management",
  },
};

export default function PropertyManagementPage() {
  return <PropertyManagementContent />;
}
