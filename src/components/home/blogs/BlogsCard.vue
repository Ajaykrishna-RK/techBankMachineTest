<template>
  <div
    class="bg-[rgba(43,43,43,1)] rounded-3xl overflow-hidden max-w-[345px] sm:max-w-[411px]"
  >
    <div class="w-full h-[227px] sm:h-[271px] rounded-3xl overflow-hidden">
      <img
        :src="image"
        :alt="title"
        class="w-full rounded-3xl h-full object-cover"
      />
    </div>

    <div class="p-[30px] text-start text-white">
      <h3 class="text-[24px] mb-2">{{ title }}</h3>
      <p class="text-[14px] text-[rgba(255,255,255,0.8)] leading-relaxed">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseCard",
  props: {
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
});
</script>
