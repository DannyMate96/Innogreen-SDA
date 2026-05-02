import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 80, 85],
  },
  async rewrites() {
    return [
      // Serve the static seniors landing page at the clean /seniors URL
      { source: "/seniors", destination: "/seniors/index.html" },
    ];
  },

  async redirects() {
    return [
      // Old home/cart paths
      { source: "/home", destination: "/", permanent: true },
      { source: "/cart", destination: "/", permanent: true },

      // About page rename
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/about-us/", destination: "/about", permanent: true },
      { source: "/our-mission", destination: "/about", permanent: true },

      // Smart homes URL fix (missing hyphen)
      { source: "/smarthomes", destination: "/smart-homes", permanent: true },

      // NDIS / participant pages → closest current equivalents
      { source: "/ndis", destination: "/sda", permanent: true },
      { source: "/participant-guide", destination: "/ndis-funding-guide", permanent: true },
      { source: "/participant-faqs", destination: "/ndis-funding-guide", permanent: true },

      // SDA / property pages
      { source: "/sda-available-now", destination: "/sda-vacancies", permanent: true },
      { source: "/rental-benefits", destination: "/property-management", permanent: true },

      // Individual property location pages → vacancies list
      { source: "/queenspark", destination: "/sda-vacancies", permanent: true },
      { source: "/queenspark/", destination: "/sda-vacancies", permanent: true },
      { source: "/morley", destination: "/sda-vacancies", permanent: true },
      { source: "/baldivis", destination: "/sda-vacancies", permanent: true },
      { source: "/leederville", destination: "/sda-vacancies", permanent: true },
      { source: "/armadale", destination: "/sda-vacancies", permanent: true },

      // Old PDF paths (Squarespace /s/ paths) → relevant pages
      {
        source: "/s/Innogreen-Low-Risk-Low-Cost-AT-NDIS-Info-v2-no-hyperlinks.pdf",
        destination: "/smart-homes",
        permanent: true,
      },
      {
        source: "/s/Privacy-and-confidentiality-policy.pdf",
        destination: "/policies",
        permanent: true,
      },
      {
        source: "/s/Video-Door-Bell-Rebate-Flyer.pdf",
        destination: "/seniors",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
