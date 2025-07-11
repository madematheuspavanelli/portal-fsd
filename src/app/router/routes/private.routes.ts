import AppLayout from "@/app/layouts/app.layout.vue";
import ComplaintsPage from "@/pages/main/complaints.vue";
import ContractDetailsPage from "@/pages/main/contract-details.vue";
import ContractManagementPage from "@/pages/main/contract-managment.vue";
import DashboardPage from "@/pages/main/dashboard.vue";
import DocInstructionsPage from "@/pages/main/doc-instructions.vue";
import DocManagementPage from "@/pages/main/doc-managment.vue";
import FinancialManagementPage from "@/pages/main/financial-managment.vue";
import LoadManagementPage from "@/pages/main/load-managment.vue";
import NewTemplatePage from "@/pages/main/new-template.vue";
import UserManagementPage from "@/pages/main/user-managment.vue";

export const privateRoutes = {
  path: "/main",
  component: AppLayout,
  children: [
    {
      path: "dashboard",
      name: "dashboard",
      component: DashboardPage,
      showOnMenu: true,
      meta: { requiresAuth: true },
    },
    {
      path: "userManagement",
      name: "userManagement",
      component: UserManagementPage,
      meta: { requiresAuth: true },
    },
    {
      path: "contractManagement",
      name: "contractManagement",
      component: ContractManagementPage,
      meta: { requiresAuth: true },
    },

    {
      path: "complaints",
      name: "complaints",
      component: ComplaintsPage,
      meta: { requiresAuth: true },
    },
    {
      path: "contractDetails",
      name: "contractDetails",
      component: ContractDetailsPage,
      meta: { requiresAuth: true },
    },
    {
      path: "docInstruction",
      name: "docInstruction",
      component: DocInstructionsPage,
      meta: { requiresAuth: true },
    },
    {
      path: "docManagement",
      name: "docManagement",
      component: DocManagementPage,
      meta: { requiresAuth: true },
    },
    {
      path: "financialManagement",
      name: "financialManagement",
      component: FinancialManagementPage,
      meta: { requiresAuth: true },
    },
    {
      path: "loadManagement",
      name: "loadManagement",
      component: LoadManagementPage,
      meta: { requiresAuth: true },
    },
    {
      path: "newTemplate",
      name: "newTemplate",
      component: NewTemplatePage,
      meta: { requiresAuth: true },
    },
    {
      path: "",
      redirect: { name: "dashboard" },
    },
    {
      path: ":pathMatch(.*)*",
      redirect: { name: "dashboard" },
    },
  ],
};
