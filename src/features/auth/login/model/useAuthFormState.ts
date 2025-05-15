import { ref } from "vue";

export type AuthFormState = "LOGIN" | "FORGOT_PASSWORD" | "OTP";

const currentState = ref<AuthFormState>("LOGIN");

export function useAuthFormState() {
  function toLogin() {
    currentState.value = "LOGIN";
  }

  function toForgotPassword() {
    currentState.value = "FORGOT_PASSWORD";
  }

  function toOtp() {
    currentState.value = "OTP";
  }

  return {
    currentState,
    toLogin,
    toForgotPassword,
    toOtp,
  };
}
