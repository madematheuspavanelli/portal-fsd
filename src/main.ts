import "@/app/styles/index.css";

import { createApp } from "vue";

import App from "@/app.vue";
import { setupApp } from "@/app/providers";

const app = createApp(App);
setupApp(app);

app.mount("#app");
