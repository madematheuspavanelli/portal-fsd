<script setup lang="ts">
import { useAuthFormState } from "@/features/auth/login/model/useAuthFormState";

import ForgotPasswordForm from "./ForgotPasswordForm.vue";
import LoginForm from "./LoginForm.vue";
import OTPForm from "./OTPForm.vue";

const { currentState } = useAuthFormState();
</script>

<template>
  <LoginForm v-if="currentState === 'LOGIN'" />
  <ForgotPasswordForm v-else-if="currentState === 'FORGOT_PASSWORD'" />
  <OTPForm v-else-if="currentState === 'OTP'" />
</template>
