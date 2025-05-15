import AuthLayout from "@/app/layouts/auth.layout.vue";
import LoginPage from "@/pages/auth/login.vue";
import RecoverPassword from "@/pages/auth/recover-password.vue";

export const publicRoutes = {
  path: "/",
  component: AuthLayout,
  children: [
    {
      path: "login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "recoverPassword",
      name: "recoverPassword",
      component: RecoverPassword,
    },
    {
      path: "",
      redirect: { name: "login" },
    },
    {
      path: ":pathMatch(.*)*",
      redirect: { name: "login" },
    },
  ],
};
