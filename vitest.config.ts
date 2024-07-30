// @ts-nocheck

/// <reference types="vitest" />

import react from "@vitejs/plugin-react-swc";
import type { PluginOption } from "vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "happy-dom",
    globals: true,
    restoreMocks: true,
    setupFiles: "./setup-tests.ts",
    coverage: {
      reporter: ["json-summary", "text"],
    },
  },
});
