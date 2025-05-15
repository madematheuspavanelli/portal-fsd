<script setup lang="ts">
import { ref } from "vue";

import { useAuthFormState } from "@/features/auth/login/model/useAuthFormState";

const email = ref("");
const loading = ref(false);

const { toLogin } = useAuthFormState();

function submit() {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    alert("Link de recuperação enviado!");
    toLogin();
  }, 1000);
}
</script>

<template>
  <form @submit.prevent="submit" class="space-y-4">
    <input
      v-model="email"
      type="email"
      placeholder="Digite seu email"
      required
      class="w-full border p-2"
    />

    <button type="submit" class="w-full bg-blue-500 py-2 text-white">
      {{ loading ? "Enviando..." : "Enviar link de recuperação" }}
    </button>

    <button
      type="button"
      @click="toLogin"
      class="text-sm text-blue-600 underline"
    >
      Voltar
    </button>
  </form>
</template>
