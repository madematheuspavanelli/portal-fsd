<script setup lang="ts">
import { X } from "lucide-vue-next";
import {
  TagsInputItemDelete,
  type TagsInputItemDeleteProps,
  useForwardProps,
} from "reka-ui";
import { computed, type HTMLAttributes } from "vue";

import { cn } from "@/shared/lib/utils";

const props = defineProps<
  TagsInputItemDeleteProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <TagsInputItemDelete
    v-bind="forwardedProps"
    :class="cn('mr-1 flex rounded bg-transparent', props.class)"
  >
    <slot>
      <X class="h-4 w-4" />
    </slot>
  </TagsInputItemDelete>
</template>
