import { Metadata } from "next";
import PoliciesContent from "./PoliciesContent";

export const metadata: Metadata = {
  title: "Policies | Innogreen",
  description:
    "Innogreen's feedback, complaints, incident management, and privacy policies. We are committed to transparency and protecting your information.",
  alternates: { canonical: "https://innogreen.net.au/policies" },
  openGraph: {
    title: "Policies | Innogreen",
    description:
      "Innogreen's feedback, complaints, incident management, and privacy policies.",
    type: "website",
  },
};

export default function PoliciesPage() {
  return <PoliciesContent />;
}
