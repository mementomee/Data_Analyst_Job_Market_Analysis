import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig({
  plugins: [react(), componentTagger()],
  base: '/Project2/', // ✅ Правильна назва вашого репозиторію
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})