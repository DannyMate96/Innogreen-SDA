import { Suspense } from "react";
import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us - Innogreen Perth | 1800 123 000",
  description:
    "Contact Innogreen at 1800 123 000 or info@innogreen.net.au. Visit us at 212 Carr Place, Leederville WA 6007. Smart Home solutions, SDA property enquiries, and NDIS assistive technology.",
  alternates: {
    canonical: "https://innogreen.net.au/contact",
  },
};

export default function ContactPage() {
  return (
    <Suspense>
      <ContactContent />
    </Suspense>
  );
}
