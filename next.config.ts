import type { NextConfig } from "next";

const nextConfig = (phase: string): NextConfig => {
  return {
    experimental: {
      dynamicIO: true,
      useCache: true,
      optimizePackageImports: ["@chakra-ui/react"],
    },
    output: "standalone",
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
      remotePatterns: [new URL("https://media.tenor.com/**")],
    },
    env: {
      PHASE: phase,
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
};

export default nextConfig;
