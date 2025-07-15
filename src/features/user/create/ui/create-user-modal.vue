<script setup lang="ts">
import { Plus } from "lucide-vue-next";

import { Button } from "@/shared/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog";
</script>

<template>
  <Dialog>
    <DialogTrigger>
      <Button> <Plus /> Adicionar </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>

      <DialogFooter> Save changes </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
