import "@block_p/env/web";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  typedRoutes: true,
  reactCompiler: true,
};

export default nextConfig;
