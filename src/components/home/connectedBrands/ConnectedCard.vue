<template>
  <div
    class="max-w-[300px] sm:max-w-[375px] max-h-[578px] overflow-hidden rounded-[40px] border-[0.87px]"
    :style="{
      borderImageSource:
        'linear-gradient(151.62deg, #BB83FF 1.55%, #B1B1B1 28.63%, #313131 115.73%)',
      borderImageSlice: 1,
      background:
        'linear-gradient(160.79deg, #0C001A 4.45%, #000000 42.61%, #000000 100%)',
    }"
  >
    <div class="px-[21px] py-[33px]">
      <div>
        <p class="uppercase text-[20px] sm:text-[24px] text-white">
          {{ title }}
        </p>
        <p
          class="sm:max-w-full max-w-[210px] text-[12px] sm:text-[14px] text-[rgba(255,255,255,0.8)]"
        >
          {{ description }}
        </p>
      </div>

      <div
        v-if="socialLinks?.length"
        class="flex items-center mt-[17px] gap-[27px]"
      >
        <img
          v-for="(icon, index) in socialLinks"
          :key="index"
          :src="icon"
          :alt="`social-link-${index}`"
          class="w-[24px] h-[24px] cursor-pointer hover:opacity-80 transition-opacity duration-200"
        />
      </div>
    </div>

    <!-- Image section -->
    <div class="px-2.5 pb-2.5">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover rounded-[30px]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ConnectedCard",
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    socialLinks: {
      type: Array as () => string[],
      default: () => [],
    },
  },
});
</script>
