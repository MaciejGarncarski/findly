import type { NextConfig } from "next";

const nextConfig = (phase: string): NextConfig => {
  return {
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
