<template>
  <button
    :type="type"
    :class="[defaultClass, customClass]"
    @click="$emit('click', $event)"
  >
    <slot />
    <slot name="icon" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
  name: "GradientButton",
  props: {
    type: {
      type: String as PropType<"button" | "submit" | "reset">,
      default: "button",
    },
    customClass: {
      type: String,
      default: "",
    },
  },
  setup() {
    const defaultClass =
      "flex w-fit   cursor-pointer items-center gap-[20px]  font-[600]  text-white rounded-[40px] bg-gradient-to-r from-[rgba(51,6,148,1)] to-[rgba(133,0,166,1)] shadow-[0_4px_15px_rgba(107,78,252,0.2)] transition-all duration-300 hover:opacity-90";
    return { defaultClass };
  },
});
</script>
˝
