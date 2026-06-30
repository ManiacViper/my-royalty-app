import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
  resolve: {
    alias: {
      // This tells Vitest exactly how to resolve absolute imports beginning with @/
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
