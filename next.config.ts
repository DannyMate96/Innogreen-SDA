import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/seniors",
        destination: "/seniors/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
