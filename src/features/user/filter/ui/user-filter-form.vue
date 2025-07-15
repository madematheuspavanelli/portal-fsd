<script setup lang="ts">
import { ref } from "vue";

import BaseCombobox from "@/shared/components/BaseCombobox.vue";

const statusOptions = [
  { value: "ACTIVE", label: "Ativo" },
  { value: "BLOCKED", label: "Bloqueado" },
];

const status = ref<"ACTIVE" | "BLOCKED" | null>(null);
</script>

<template>
  <BaseCombobox
    v-model="status"
    :options="statusOptions"
    class="w-10"
    placeholder="Digite o nome de usuário"
  />
</template>
