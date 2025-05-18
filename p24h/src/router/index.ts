import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../pages/Home.vue";
import DisparationPage from "../pages/Disparition.vue";
import ForetPage from "../pages/Foret.vue";
import LoginPage from "../pages/Login.vue";
import MonstrePage from "../pages/Monstre.vue";
import PlanningPage from "../pages/Planning.vue";
import { useAuthStore } from "../stores/user";

const routes = [
  { path: "/", component: HomePage },
  { path: "/disparation", component: DisparationPage },
  { path: "/foret", component: ForetPage },
  { path: "/login", name: "Login", component: LoginPage },
  { path: "/monstre", component: MonstrePage },
  { path: "/planning", component: PlanningPage, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.user) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
