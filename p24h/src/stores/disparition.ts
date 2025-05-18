import { defineStore } from "pinia";

export interface Dossier {
  prenom: string;
  nom: string;
  dateNaissance: string;
  affectation: string;
  rang: string;
  statut: string;
  dateDisparition: string;
  dernierContact: string;
  resume: string;
  annexes: string;
}

export const useDossierStore = defineStore("dossier", {
  state: () => ({
    dossiers: [] as Dossier[],
  }),
  actions: {
    async fetchDossiers() {
      const baseURL = import.meta.env.DEV
        ? "/api-dossier"
        : "https://api.24h.etiq-dijon.fr";
      const urls = [
        `${baseURL}/Beta-343743bb-3f66/P38aaRcQc8WXBmqwsbH`,
        `${baseURL}/Beta-343743bb-3f66/gXoBSmVp8GygXalJADxu`,
        `${baseURL}/Beta-343743bb-3f66/NAdRyI9h7FEQwiD56m3d`,
        `${baseURL}/Beta-343743bb-3f66/bcqtfwf0YI0ix4g38g9L`,
        `${baseURL}/Beta-343743bb-3f66/Xp5Rb7FzTLsRjbZ0IRak`,
      ];

      try {
        const results = await Promise.all(
          urls.map((url) =>
            fetch(url).then((res) => {
              if (!res.ok) throw new Error(`Erreur sur ${url}`);
              return res.json();
            })
          )
        );
        this.dossiers = results;
      } catch (error) {
        console.error("Erreur lors de la récupération des dossiers :", error);
      }
    },
  },
});
