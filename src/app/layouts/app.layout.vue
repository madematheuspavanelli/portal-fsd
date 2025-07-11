<script lang="ts" setup>
import { Separator } from "@/shared/components/ui/separator";
import { SidebarProvider } from "@/shared/components/ui/sidebar";
import Header from "@/widgets/app-header.vue";
import AppSidebar from "@/widgets/app-sidebar.vue";
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <main class="bg-background text-foreground min-h-screen flex-1">
      <Header />
      <div class="px-8">
        <Separator />
      </div>
      <div class="p-4">
        <router-view />
      </div>
    </main>
  </SidebarProvider>
</template>
