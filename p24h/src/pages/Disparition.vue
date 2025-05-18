<template>
  <div class="p-4 bg-gray-900 min-h-screen text-gray-100">
    <h1 class="text-2xl font-bold mb-4 text-white">Dossiers de disparition</h1>

    <div v-if="dossiers.length === 0" class="text-gray-400">
      Chargement en cours...
    </div>

    <div v-else class="grid gap-6">
      <div
        v-for="(d, i) in dossiers"
        :key="i"
        class="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700"
      >
        <h2 class="text-xl font-semibold text-white">
          {{ d.prenom }} {{ d.nom }}
        </h2>
        <p class="text-sm text-gray-400 mb-2">
          {{ d.rang }} – {{ d.affectation }}
        </p>

        <ul class="text-sm space-y-1 text-gray-300">
          <li><strong>Naissance :</strong> {{ d.dateNaissance }}</li>
          <li><strong>Statut :</strong> {{ d.statut }}</li>
          <li><strong>Disparu le :</strong> {{ d.dateDisparition }}</li>
          <li><strong>Dernier contact :</strong> {{ d.dernierContact }}</li>
        </ul>

        <div class="mt-4">
          <h3 class="font-semibold text-gray-200">Résumé</h3>
          <p class="text-sm whitespace-pre-line text-gray-300">
            {{ d.resume }}
          </p>
        </div>

        <div class="mt-2">
          <h3 class="font-semibold text-gray-200">Annexes</h3>
          <p class="text-sm text-gray-300">{{ d.annexes }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useDossierStore } from "../stores/disparition";

const dossierStore = useDossierStore();
const { dossiers } = storeToRefs(dossierStore);

onMounted(async () => {
  await dossierStore.fetchDossiers();
});
</script>
