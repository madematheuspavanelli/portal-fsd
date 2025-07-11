<script setup lang="ts">
import {
  CircleDollarSign,
  Files,
  FileStack,
  LayoutDashboard,
  ListChecks,
  Megaphone,
  ReceiptText,
  TruckElectric,
} from "lucide-vue-next";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/components/ui/sidebar";

const items = [
  {
    title: "Dashboard",
    url: "/main/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Usuários",
    url: "/main/userManagement",
    icon: ListChecks,
  },
  {
    title: "Contratos",
    url: "/main/contractManagement",
    icon: ReceiptText,
  },
  {
    title: "Gestão Financeira",
    url: "/main/financialManagement",
    icon: CircleDollarSign,
  },
  {
    title: "Gestão de Cargas",
    url: "/main/loadManagement",
    icon: TruckElectric,
  },
  {
    title: "Gestão de Doc.",
    url: "/main/docManagement",
    icon: FileStack,
  },
  {
    title: "Ins. Documentária",
    url: "/main/docInstruction",
    icon: Files,
  },
  {
    title: "Reclamações/RACc",
    url: "/main/complaints",
    icon: Megaphone,
  },
];
</script>

<template>
  <Sidebar collapsible="icon">
    <SidebarContent class="pt-8">
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in items" :key="item.title">
              <SidebarMenuButton asChild>
                <RouterLink :to="item.url">
                  <component :is="item.icon" />
                  <span>{{ item.title }}</span>
                </RouterLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>
