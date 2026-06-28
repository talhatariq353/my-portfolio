import type { NextConfig } from "next";

/**
 * Set NEXT_PUBLIC_BASE_PATH=/your-repo-name at build time when deploying
 * to a GitHub Pages project page (https://USER.github.io/your-repo-name/).
 * Leave empty for username.github.io root deployment or Vercel.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
