import packageJson from "../package.json" assert { type: "json" };

/** @type {import("next").NextConfig} */
export const nextConfigBase = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
  reactStrictMode: true,
  transpilePackages: ["@risc0/ui"],
  publicRuntimeConfig: {
    version: packageJson.version,
  },
  experimental: {
    caseSensitiveRoutes: true,
    staleTimes: {
      dynamic: 30,
    },
  },
};
