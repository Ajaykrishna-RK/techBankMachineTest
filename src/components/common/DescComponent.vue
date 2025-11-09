<template>
  <p :class="[' text-[14px] sm:text-[16px]', customClass]">
    {{ text }}
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DescComponent",
  props: {
    text: {
      type: String,
      required: true,
    },
    customClass: {
      type: String,
      default: "",
    },
  },
});
</script>
