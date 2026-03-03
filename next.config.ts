import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/morley",
        destination: "https://innogreenhomes.com.au/morley",
        permanent: true,
      },
      {
        source: "/leederville",
        destination: "https://innogreenhomes.com.au/leederville",
        permanent: true,
      },
      {
        source: "/Baldivis",
        destination: "https://innogreenhomes.com.au/baldivis",
        permanent: true,
      },
      {
        source: "/Armadale",
        destination: "https://innogreenhomes.com.au/armadale",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
