<template>
  <p :class="[' text-[18px] text-[rgba(187,131,255,1)] ', customClass]">
    {{ text }}
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ShortHeading",
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
