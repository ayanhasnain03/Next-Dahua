import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['your-image-domain.com'], // Add your image domains here
  },
  compiler: {
    styledComponents: true, // Enable styled-components
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
};

export default nextConfig;
