/* c8 ignore start */
import { toMerged } from "es-toolkit";
import type { Config } from "tailwindcss";
import tailwindConfig from "./config/tailwind.config.base";

const config = toMerged(
  {
    theme: {
      extend: {
        fontFamily: {
          sans: ["var(--font-europa-sans)", "system-ui"],
          mono: ["var(--font-jetbrains-mono)"],
        },
      },
    },
  },
  tailwindConfig,
) satisfies Config;

export default config;
