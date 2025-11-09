<template>
  <div
    class="flex flex-col  px-[18px] sm:px-[41px]"
    :class="[
      customClass,
      showBorder ? 'border-r border-r-[rgba(192,192,192,0.24)]' : '',
    ]"
  >
    <!-- Head slot wrapped in a div with headClass -->
    <div :class="headClass">
      <slot name="head"></slot>
    </div>

    <!-- Text slot wrapped in a div with textClass -->
    <div :class="textClass">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TextBlock",
  props: {
    customClass: { type: String, default: "" },
    headClass: {
      type: String,
      default: "text-white headFont text-[20px] sm:text-[32px]",
    },
    textClass: {
      type: String,
      default: "  text-[12px] sm:text-[15px] text-[rgba(192,192,192,1)]",
    },
    showBorder: { type: Boolean, default: false },
  },
});
</script>
