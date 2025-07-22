/* c8 ignore start */
import { readFileSync } from "node:fs";

const packageJson = JSON.parse(readFileSync("./package.json"));

/** @type {import("next").NextConfig} */
export const nextConfigBase = {
  transpilePackages: ["@risc0/ui"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  publicRuntimeConfig: {
    version: packageJson.version,
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    // Activate new client-side router improvements
    clientSegmentCache: true,

    // Enable persistent caching for the turbopack dev server and build.
    turbopackPersistentCaching: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};
