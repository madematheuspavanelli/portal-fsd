import "@/app/styles/index.css";

import { createApp } from "vue";

import App from "@/App.vue";
import { setupApp } from "@/app/providers/index";

const app = createApp(App);
setupApp(app);

app.mount("#app");
