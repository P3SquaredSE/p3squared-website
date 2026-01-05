import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 🔑 enables static HTML generation
  images: {
    unoptimized: true, // required for static export
  },
};

export default nextConfig;
