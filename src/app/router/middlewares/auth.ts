import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

export default function authMiddleware(
  to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext,
) {
  // const token = sessionStorage.getItem("token");

  // if (to.meta.requiresAuth && !token) {
  //   return next({ name: "login" });
  // }

  return next();
}
