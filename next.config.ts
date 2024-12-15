import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  // set basePath and assetPrefix for GitHub Pages - IN_PRODUCTION is defined in the workflow file.
  basePath: process.env.IN_PRODUCTION ? "/notion-widgets" : "",
  assetPrefix: process.env.IN_PRODUCTION ? "/notion-widgets" : ""
};

export default nextConfig;
