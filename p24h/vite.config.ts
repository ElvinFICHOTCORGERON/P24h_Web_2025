import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  server: {
    proxy: {
      // Proxy vers l'API d'authentification
      "/api-auth": {
        target: "https://api24h.82.29.175.123.nip.io",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api-auth/, "/api"),
      },

      // Proxy vers l'API des dossiers
      "/api-dossier": {
        target: "https://api.24h.etiq-dijon.fr",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api-dossier/, ""),
      },
    },
  },
});
