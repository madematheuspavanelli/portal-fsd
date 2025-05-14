import type { App } from "vue";

import router from "@/app/router";

export function setupRouter(app: App) {
  app.use(router);
}
