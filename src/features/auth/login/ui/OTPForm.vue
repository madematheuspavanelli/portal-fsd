<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import { useAuthFormState } from "@/features/auth/login/model/useAuthFormState";
import { PinInput, PinInputGroup } from "@/shared/components/ui/pin-input";
import PinInputSlot from "@/shared/components/ui/pin-input/PinInputSlot.vue";

const router = useRouter();
const { toLogin } = useAuthFormState();

const value = ref<string[]>(["1", "2", "3"]);

function submit(e: string[]) {
  const pininput = e.join("");
  console.log("submit", pininput);
  setTimeout(() => {
    router.push({ name: "dashboard" });
    toLogin();
  }, 1000);
}
</script>

<template>
  <div>
    <PinInput id="pin-input" v-model="value" placeholder="○" @complete="submit">
      <PinInputGroup>
        <PinInputSlot v-for="(id, index) in 5" :key="id" :index="index" />
      </PinInputGroup>
    </PinInput>
  </div>
</template>
