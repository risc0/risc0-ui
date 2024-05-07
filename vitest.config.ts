/// <reference types="vitest" />

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "happy-dom",
    globals: true,
    restoreMocks: true,
    setupFiles: "./setupTests.ts",
    include: ["**/*.test.?(c|m)[jt]s?(x)"],
  },
});
