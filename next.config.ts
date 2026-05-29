import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "utfs.io" },
      { protocol: "https", hostname: "uploadthing.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
