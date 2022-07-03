import { defineConfig } from "vite";

export default defineConfig(async () => {
    return {
      publicDir: "./public",
      build: {
        outDir: "dist",
        lib: {
          formats: ["es"],
          entry: "./lib/index.ts"
        }
      }
    }
});
