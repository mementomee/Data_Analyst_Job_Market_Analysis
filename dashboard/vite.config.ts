import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig({
  plugins: [react()],
  base: '/назва-вашого-репозиторію/', // Замініть на назву вашого репо
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
