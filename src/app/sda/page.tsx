import type { Metadata } from "next";
import SDAContent from "./SDAContent";

export const metadata: Metadata = {
  title: "SDA Properties Perth - Specialist Disability Accommodation",
  description:
    "Explore Innogreen's NDIS-approved SDA properties in Armadale, Baldivis, Leederville & Morley. High Physical Support homes with smart technology, OOA rooms, solar panels & accessible design.",
  alternates: {
    canonical: "https://innogreen.net.au/sda",
  },
};

export default function SDAPage() {
  return <SDAContent />;
}
