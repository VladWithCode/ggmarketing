import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

// Pin the file-tracing root to THIS project. There is a stray
// C:\Users\Hp\package-lock.json on the machine, so Next would otherwise infer
// the workspace root as the user home dir and trace/export across it on
// Windows — the source of the intermittent missing-manifest build errors
// (next-font-manifest.json / *.nft.json).
const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  outputFileTracingRoot: projectRoot,
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
