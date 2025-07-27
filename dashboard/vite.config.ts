import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig({
  plugins: [react(), componentTagger()],
  base: '/Data_Analyst_Job_Market_Analysis/'
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
