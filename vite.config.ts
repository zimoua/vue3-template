import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { changePackageVersion } from "./build/plugins";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  server: {
    open: true,
    fs: {
      strict: false,
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  plugins: [
    changePackageVersion(),
    vue({
      refTransform: [/src/],
    }),
  ],
});
