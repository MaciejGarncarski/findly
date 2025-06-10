import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    dynamicIO: true,
    ppr: true,
    useCache: true,
    cssChunking: true,
    optimizePackageImports: ["@chakra-ui/react"],
  },
  async redirects() {
    return [
      {
        source: "/auth",
        destination: "/auth/signin",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
