import DashboardPage from "@/pages/dashboard/index.vue";
import LoginPage from "@/pages/login/index.vue";

export default [
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardPage,
    meta: { requiresAuth: true },
  },
];
