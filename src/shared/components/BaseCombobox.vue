<!-- src/shared/components/BaseCombobox.vue -->
<script setup lang="ts">
import { Check, ChevronsUpDown } from "lucide-vue-next";
import { computed, ref } from "vue";

import { Button } from "@/shared/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/shared/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/components/ui/popover";
import { cn } from "@/shared/lib/utils";

interface Option {
  value: string | number;
  label: string;
  disabled?: boolean;
}

const props = defineProps<{
  modelValue?: Option["value"] | null;
  options: Option[];
  placeholder?: string;
  emptyText?: string;
  searchPlaceholder?: string;
  widthClass?: string;
}>();

const emit = defineEmits<{
  "update:modelValue": [Option["value"] | null];
  select: [Option];
}>();

/* ------------------------  UI state  ------------------------ */
const open = ref(false);

const selected = computed(() =>
  props.options.find((o) => o.value === props.modelValue),
);

function onSelect(option: Option) {
  if (option.disabled) return;
  emit("update:modelValue", option.value);
  emit("select", option);
  open.value = false;
}
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button variant="outline" class="justify-between rounded-md">
        {{ selected?.label ?? placeholder ?? "Selecione…" }}
        <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>

    <PopoverContent :class="[widthClass ?? 'w-[200px]', 'p-0']">
      <Command
        :model-value="modelValue"
        @update:model-value="(val) => emit('update:modelValue', val)"
      >
        <CommandInput :placeholder="searchPlaceholder ?? 'Buscar…'" />
        <CommandEmpty>{{
          emptyText ?? "Nenhum item encontrado."
        }}</CommandEmpty>

        <CommandList>
          <CommandGroup>
            <CommandItem
              v-for="option in options"
              :key="option.value"
              :value="option.value"
              @select="() => onSelect(option)"
            >
              <Check
                class="mr-2 h-4 w-4"
                :class="
                  cn(option.value === modelValue ? 'opacity-100' : 'opacity-0')
                "
              />
              {{ option.label }}
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>
