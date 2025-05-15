import type { App } from "vue";

import { i18n } from "@/app/i18n";

import { setupPinia } from "./pinia";
import { setupRouter } from "./router";
import { setupVueQuery } from "./vue-query";

export function setupApp(app: App) {
  setupPinia(app);
  setupRouter(app);
  setupVueQuery(app);
  app.use(i18n);
}
