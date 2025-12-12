import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Use an object for `serverActions` to match the expected type
    // (optional properties: `bodySizeLimit`, `allowedOrigins`).
    // An empty object enables the feature without specifying limits.
    serverActions: {},
  },
};

export default nextConfig;
