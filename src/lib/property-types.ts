export interface PropertyInfo {
  slug: string;
  name: string;
  subtitle: string;
  address: string;
  sdaCategory: string;
  sdaSuitability: string[];
  propertyType: "house" | "apartments";
  apartmentCount?: number;
  bedroomDescription: string;
  bathroomDescription: string;
  parkingDescription: string;
  availability: string;
  status: "available" | "leased";

  heroImage: string;
  cardImage: string;

  keyStats: { label: string; value: string }[];

  locationPoints: string[];
  features: PropertyFeature[];
  gallery: GalleryImage[];
  floorplans: GalleryImage[];
  virtualTourUrl?: string;
  brochureUrl?: string;
  sharedSupportsBrochureUrl?: string;
  houseManualUrl?: string;

  specifications: PropertySpec[];

  metaTitle: string;
  metaDescription: string;
  ogImage: string;
}

export interface PropertyFeature {
  title: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface PropertySpec {
  title: string;
  icon: string;
  items: string[];
}
