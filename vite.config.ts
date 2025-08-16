import { defineConfig } from "vitest/config";
import suidPlugin from "@suid/vite-plugin";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [suidPlugin(), solidPlugin()],
  build: {
    target: "esnext",
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "src/setupTests.ts",
    coverage: {
      exclude: [
        "**/*.d.ts",
        "src/reportWebVitals.ts",
        "eslint.config.ts",
        "vite.config.ts",
      ],
      provider: "v8",
    },
  },
});
