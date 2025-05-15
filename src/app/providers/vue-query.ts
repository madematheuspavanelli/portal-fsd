import { QueryClient, VueQueryPlugin } from "@tanstack/vue-query";
import type { App } from "vue";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

export function setupVueQuery(app: App) {
  app.use(VueQueryPlugin, { queryClient });
}
