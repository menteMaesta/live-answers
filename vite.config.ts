import { defineConfig } from "vite";
import type { UserConfig } from "vite";
import type { InlineConfig } from "vitest";
import react from "@vitejs/plugin-react";

type ViteConfig = UserConfig & { test: InlineConfig };

const config: ViteConfig = {
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      routes: "/src/routes",
      assets: "/src/assets",
      helpers: "/src/helpers",
      components: "/src/components",
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/__tests__/setup.ts",
  },
};

export default defineConfig(config);
