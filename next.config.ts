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
  allowedDevOrigins: ["http://localhost:3000", "http://192.168.2.73:3000"],
};

export default nextConfig;
