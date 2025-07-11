<script setup lang="ts">
import { useRoute } from "vue-router";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import SidebarTrigger from "@/shared/components/ui/sidebar/SidebarTrigger.vue";

const route = useRoute();
</script>

<template>
  <header class="flex items-center justify-between p-8">
    <SidebarTrigger />
    <h1 class="text-accent-foreground text-2xl font-semibold">
      {{ route.name }}
    </h1>

    <div class="flex flex-1 items-center justify-end gap-8">
      <!-- empresa cliente -->

      <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem> Logout </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Select default-value="pt-br">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="pt-br">PT</SelectItem>
            <SelectItem value="en-us">EN</SelectItem>
            <SelectItem value="es-es">ES</SelectItem>
            <SelectItem value="ar-sa">AR</SelectItem>
            <SelectItem value="zh-cn">CN</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  </header>
</template>
