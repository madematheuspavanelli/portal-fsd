<script setup lang="ts">
import {
  TagsInputItem,
  type TagsInputItemProps,
  useForwardProps,
} from "reka-ui";
import { computed, type HTMLAttributes } from "vue";

import { cn } from "@/shared/lib/utils";

const props = defineProps<
  TagsInputItemProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <TagsInputItem
    v-bind="forwardedProps"
    :class="
      cn(
        'bg-secondary data-[state=active]:ring-ring ring-offset-background flex h-5 items-center rounded-md data-[state=active]:ring-2 data-[state=active]:ring-offset-2',
        props.class,
      )
    "
  >
    <slot />
  </TagsInputItem>
</template>
