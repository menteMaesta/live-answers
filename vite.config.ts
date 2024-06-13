import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
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
});
