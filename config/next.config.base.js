import { readFileSync } from "fs";
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
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};
