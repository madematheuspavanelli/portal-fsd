import { createRouter, createWebHistory } from "vue-router";

import authMiddleware from "./middlewares/auth";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
});

router.beforeEach(authMiddleware);

export default router;
