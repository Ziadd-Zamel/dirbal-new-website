import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["dashboard.dirbal.ly"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
