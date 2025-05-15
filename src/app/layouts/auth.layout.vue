<script setup lang="ts">
import CompanyLogo from "@/shared/assets/company-logo.vue";

import background from "./assets/auth-background.png";
import backgroundMobile from "./assets/auth-background-mobile.png";

const backgroundStyle = `background-image: url(${background})`;
</script>

<template>
  <div
    class="bg-primary flex min-h-screen justify-center bg-cover bg-center p-5 bg-blend-multiply"
    :style="backgroundStyle"
  >
    <div
      class="flex w-full flex-col items-center justify-between lg:max-w-4xl lg:flex-row"
    >
      <div class="flex flex-col items-center lg:w-72 lg:gap-8">
        <CompanyLogo class="w-[6.5rem] lg:w-36" />
        <p class="text-2xl font-semibold text-white uppercase lg:text-5xl">
          Customer Service Portal
        </p>
      </div>
      <router-view />
      <div class="lg:hidden" />
    </div>
  </div>
</template>
