<template>
  <div class="max-w-md mx-auto mt-20 p-6 bg-white rounded-2xl shadow-md">
    <h2 class="text-2xl font-bold mb-6 text-center">Connexion</h2>

    <form @submit.prevent="handleLogin" class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700"
          >Identifiant</label
        >
        <input
          v-model="login"
          type="text"
          required
          class="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700"
          >Mot de passe</label
        >
        <input
          v-model="password"
          type="password"
          required
          class="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        :disabled="authStore.loading"
        class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
      >
        {{ authStore.loading ? "Connexion..." : "Se connecter" }}
      </button>

      <p v-if="authStore.error" class="text-red-600 text-sm text-center mt-2">
        {{ authStore.error }}
      </p>
    </form>

    <div v-if="authStore.user" class="mt-4 text-green-700 text-center">
      Connecté en tant que {{ authStore.user.prenom }}
      {{ authStore.user.nom }} : {{ authStore.user.droit }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../stores/user";

const login = ref("");
const password = ref("");

const authStore = useAuthStore();

const handleLogin = async () => {
  await authStore.login(login.value, password.value);
};
</script>
