import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us - Perth NDIS Provider & Licensed Property Agency",
  description:
    "Learn about Innogreen - Perth's licensed property management agency (RA82486) and registered NDIS provider (4050064987). Led by Arian David Gorjy, specialising in Smart Home assistive technology and SDA.",
  alternates: {
    canonical: "https://innogreen.net.au/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
