import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
  },
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // a statikus export miatt kell a képekhez, hogy meg legyenek jelenítve
  },
};

export default nextConfig;