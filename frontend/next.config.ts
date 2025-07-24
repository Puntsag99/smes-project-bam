import type { NextConfig } from "next";

module.exports = {
  reactStrictMode: false,
};

const nextConfig: NextConfig = {
  images: {
    domains: [
      "pub-52aed96024654efbb4ebd3a54cbfd43f.r2.dev",
      "cdn.example.com",
      "images.unsplash.com",
    ],
  },
};

export default nextConfig;
