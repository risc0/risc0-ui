/* c8 ignore start */
import deepmerge from "deepmerge";
import type { Config } from "tailwindcss";
import tailwindConfig from "./config/tailwind.config.base";

const config = deepmerge(tailwindConfig, {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-europa-sans)", "system-ui"],
        mono: ["var(--font-jetbrains-mono)"],
      },
    },
  },
}) satisfies Config;

config.content = ["**/*.{ts,tsx}"];

export default config;
