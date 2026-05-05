import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPropertySlugs, getPropertyBySlug } from "@/lib/properties";
import PropertyPageTemplate from "@/components/sda/PropertyPageTemplate";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPropertySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return {};

  return {
    title: property.metaTitle,
    description: property.metaDescription,
    alternates: { canonical: `https://innogreen.net.au/sda/${slug}` },
    openGraph: {
      title: property.metaTitle,
      description: property.metaDescription,
      type: "website",
      images: [{ url: property.ogImage, width: 1200, height: 630, alt: property.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: property.metaTitle,
      description: property.metaDescription,
      images: [property.ogImage],
    },
  };
}

export default async function PropertyPage({ params }: Props) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  const propertyJsonLd = {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: property.name,
    description: property.metaDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress: property.address,
      addressRegion: "WA",
      addressCountry: "AU",
    },
    numberOfRooms: property.bedroomDescription,
    numberOfBathroomsTotal: property.bathroomDescription,
    url: `https://innogreen.net.au/sda/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(propertyJsonLd) }}
      />
      <PropertyPageTemplate property={property} />
    </>
  );
}
