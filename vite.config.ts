import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // 🔥 مهم جدًا للنشر
  base: "./",

  build: {
    minify: "esbuild",
  },
});
