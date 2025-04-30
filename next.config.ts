import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  eslint: {
    dirs: ["src"], // Only run ESLint on the "pages" and "components" directories during production builds (next build)
  },
};

export default nextConfig;
