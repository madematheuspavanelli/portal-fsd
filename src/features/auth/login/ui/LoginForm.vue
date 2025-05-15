<script setup lang="ts">
import { ref } from "vue";

import { useAuthFormState } from "@/features/auth/login/model/useAuthFormState";

const email = ref("");
const password = ref("");
const loading = ref(false);

const { toOtp, toForgotPassword } = useAuthFormState();

function submit() {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
    toOtp();
  }, 1000);
}
</script>

<template>
  <form @submit.prevent="submit" class="space-y-4">
    <input
      v-model="email"
      type="email"
      placeholder="Email"
      required
      class="w-full border p-2"
    />
    <input
      v-model="password"
      type="password"
      placeholder="Senha"
      required
      class="w-full border p-2"
    />

    <button type="submit" class="w-full bg-blue-500 py-2 text-white">
      {{ loading ? "Entrando..." : "Entrar" }}
    </button>

    <button
      type="button"
      @click="toForgotPassword"
      class="text-sm text-blue-600 underline"
    >
      Esqueci minha senha
    </button>
  </form>
</template>
