import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/valentines",
  assetPrefix: "/valentines/",
  images: {
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.ts",
  },
};

export default nextConfig;
