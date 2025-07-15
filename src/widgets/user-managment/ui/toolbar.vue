<script setup lang="ts">
import { UserCreate } from "@/features/user/create";
import { UserFilter } from "@/features/user/filter";
</script>

<template>
  <div class="flex flex-col justify-between">
    <UserCreate />
    <UserFilter />
  </div>
</template>
