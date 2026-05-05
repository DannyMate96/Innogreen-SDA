import type { Metadata } from "next";
import SDAVacanciesContent from "./SDAVacanciesContent";

export const metadata: Metadata = {
  title: "SDA Vacancies Perth - Available Properties | Innogreen",
  description:
    "View currently available SDA properties in Perth by Innogreen. NDIS-approved Specialist Disability Accommodation with smart home technology, OOA rooms, and solar panels.",
  alternates: {
    canonical: "https://innogreen.net.au/sda-vacancies",
  },
};

export default function SDAVacanciesPage() {
  return <SDAVacanciesContent />;
}
