<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { User } from "lucide-vue-next";
import { useAuthStore } from "./stores/user";

const drawerToggle = ref<HTMLInputElement | null>(null);

const links = [
  { path: "/", label: "Accueil" },
  { path: "/disparation", label: "Disparation" },
  { path: "/foret", label: "Forêt" },
  { path: "/monstre", label: "Monstre" },
  { path: "/planning", label: "Planning" },
];

const route = useRoute();
watch(
  () => route.fullPath,
  () => {
    if (drawerToggle.value) {
      drawerToggle.value.checked = false;
    }
  }
);

const authStore = useAuthStore();

const handleLogout = () => {
  authStore.logout();
};
</script>

<template>
  <div class="drawer">
    <!-- Drawer Toggle -->
    <input
      id="my-drawer"
      type="checkbox"
      class="drawer-toggle"
      ref="drawerToggle"
    />

    <!-- Page Content -->
    <div class="drawer-content flex flex-col">
      <div class="navbar bg-neutral shadow-sm">
        <div class="flex-none">
          <label for="my-drawer" class="btn btn-square btn-ghost drawer-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block h-8 w-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div class="flex-1"></div>
        <div class="flex-none">
          <RouterLink to="/login" class="btn btn-square btn-ghost mr-2">
            <User class="inline-block w-8 h-8 text-current" />
          </RouterLink>
          <button
            v-if="authStore.user"
            @click="handleLogout"
            class="btn btn-sm btn-outline"
          >
            Déconnexion
          </button>
        </div>
      </div>
    </div>

    <!-- Drawer Side -->
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 w-64 min-h-full bg-neutral text-base-content">
        <li v-for="link in links" :key="link.path">
          <RouterLink
            :to="link.path"
            class="block px-4 py-2 rounded-lg text-white-700 hover:bg-gray-100 hover:text-blue-600 transition duration-200"
            >{{ link.label }}</RouterLink
          >
        </li>
      </ul>
    </div>
  </div>

  <RouterView />
</template>
