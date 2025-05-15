<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import { useAuthFormState } from "@/features/auth/login/model/useAuthFormState";

const otp = ref("");
const loading = ref(false);

const router = useRouter();
const { toLogin } = useAuthFormState();

function submit() {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    router.push({ name: "dashboard" });
    toLogin();
  }, 1000);
}
</script>

<template>
  <form @submit.prevent="submit" class="space-y-4">
    <input
      v-model="otp"
      type="text"
      maxlength="6"
      placeholder="Digite o código OTP"
      required
      class="w-full border p-2 text-center tracking-widest"
    />

    <button type="submit" class="w-full bg-blue-500 py-2 text-white">
      {{ loading ? "Validando..." : "Confirmar" }}
    </button>
  </form>
</template>
