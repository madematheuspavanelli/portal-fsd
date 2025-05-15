<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <h1>Dashboard</h1>
  <p>{{ t("modules.dashboard.table.title") }}</p>
</template>
