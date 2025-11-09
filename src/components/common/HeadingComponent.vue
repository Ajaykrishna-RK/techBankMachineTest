<template>
  <p :class="['headFont text-[24px] sm:text-[32px] text-white', customClass]">
    {{ text }}
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeadingComponent",
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
