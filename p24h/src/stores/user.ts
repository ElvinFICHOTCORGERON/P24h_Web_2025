import { defineStore } from "pinia";
import type { AuthState } from "../model/type";

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    user: null,
    loading: false,
    error: null,
  }),

  actions: {
    async login(login: string, password: string) {
      this.loading = true;
      this.error = null;

      const baseURL = "/api/auth"; // Toujours utiliser le proxy Vercel ici
      const guildId = "Beta-b915c7d7-11c3";

      try {
        const response = await fetch(
          `${baseURL}/intra/info/authentification/${guildId}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ login, password }),
          }
        );

        if (!response.ok) {
          throw new Error("Erreur d'authentification");
        }

        const data = await response.json();

        this.user = data.user || data;
      } catch (err: any) {
        this.error = err.message || "Erreur inconnue";
        console.error("Erreur de connexion :", err);
      } finally {
        this.loading = false;
      }
    },

    logout() {
      this.user = null;
    },
  },
});
