import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["dashboard.dirbal.ly"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
    // Disable font optimization for Vercel builds
    ...(process.env.VERCEL && {
      fontLoaders: [],
    }),
    optimizePackageImports: [],
  },
};

export default nextConfig;
