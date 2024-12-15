import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: "/notion-widgets",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
