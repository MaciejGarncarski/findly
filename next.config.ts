import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [new URL("https://media.tenor.com/**")],
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
