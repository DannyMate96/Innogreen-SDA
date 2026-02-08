import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://innogreen.net.au"),
  title: {
    default: "Innogreen | Smart, Secure & Accessible Homes in Perth | NDIS Provider",
    template: "%s | Innogreen - Perth NDIS Smart Homes",
  },
  description:
    "Innogreen is a licensed property management agency (RA82486) and registered NDIS provider (4050064987) in Perth, WA. Specialising in Smart Home assistive technology, Specialist Disability Accommodation (SDA), and video doorbells for seniors.",
  keywords: [
    "NDIS provider Perth",
    "SDA Perth",
    "Specialist Disability Accommodation Perth",
    "Smart Home NDIS",
    "accessible homes Perth",
    "NDIS smart home technology",
    "disability accommodation Perth WA",
    "assistive technology NDIS",
    "SDA housing Perth",
    "NDIS property management",
    "accessible housing Western Australia",
    "video doorbell seniors",
    "Innogreen",
    "Innogreen Homes",
    "NDIS provider 4050064987",
    "Leederville",
    "Armadale SDA",
    "Baldivis SDA",
    "Morley SDA",
  ],
  authors: [{ name: "Innogreen" }],
  creator: "Innogreen",
  publisher: "Innogreen",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://innogreen.net.au",
    siteName: "Innogreen",
    title: "Innogreen | Smart, Secure & Accessible Homes in Perth",
    description:
      "Licensed property management and registered NDIS provider specialising in Smart Home technology and Specialist Disability Accommodation (SDA) in Perth, WA.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Innogreen - Smart, Secure & Accessible Homes in Perth, Western Australia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Innogreen | Smart, Secure & Accessible Homes in Perth",
    description:
      "Licensed property management and registered NDIS provider specialising in Smart Home technology and SDA in Perth, WA.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://innogreen.net.au",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Innogreen",
  description:
    "Licensed property management agency and registered NDIS provider specialising in Smart Home assistive technology and Specialist Disability Accommodation (SDA) in Perth, Western Australia.",
  url: "https://innogreen.net.au",
  telephone: "1800123000",
  email: "info@innogreentech.com.au",
  address: {
    "@type": "PostalAddress",
    streetAddress: "212 Carr Place",
    addressLocality: "Leederville",
    addressRegion: "WA",
    postalCode: "6007",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -31.9372638,
    longitude: 115.8427839,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/Innogreen.perth",
    "https://www.linkedin.com/company/innogreenhomes/",
  ],
  areaServed: {
    "@type": "City",
    name: "Perth",
    containedInPlace: {
      "@type": "State",
      name: "Western Australia",
    },
  },
  priceRange: "$$",
  image: "/og-image.jpg",
  knowsAbout: [
    "NDIS",
    "Specialist Disability Accommodation",
    "Smart Home Technology",
    "Assistive Technology",
    "Property Management",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
