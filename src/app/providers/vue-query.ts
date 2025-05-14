import { QueryClient, VueQueryPlugin } from "@tanstack/vue-query";
import type { App } from "vue";

export function setupVueQuery(app: App) {
  const queryClient = new QueryClient();
  app.use(VueQueryPlugin, { queryClient });
}
