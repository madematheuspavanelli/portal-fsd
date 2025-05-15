import { createI18n } from "vue-i18n";

import arAR from "./languages/ar-ar";
import cnCN from "./languages/cn-cn";
import enUS from "./languages/en-us";
import esES from "./languages/es-es";
import ptBR from "./languages/pt-br";

export const i18n = createI18n({
  legacy: false,
  locale: "pt-BR",
  fallbackLocale: "pt-BR",
  messages: {
    "pt-BR": ptBR,
    "en-US": enUS,
    "es-ES": esES,
    "ar-AR": arAR,
    "cn-CN": cnCN,
  },
});
