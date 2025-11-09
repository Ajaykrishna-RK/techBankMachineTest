<template>
  <div
    :class="[
      'border-[rgba(217,217,217,1)] p-3 border-[0.9px]  rounded-[28px]',
      customClass,
    ]"
  >
    <!-- Image -->
    <div class="w-full relative rounded-t-[20px] h-[198px] sm:h-[315px]">
      <img
        :src="image"
        :alt="title"
        class="rounded-t-[20px] w-full h-full object-cover"
      />
      <img
        :src="sideImage"
        :alt="title"
        class=" w-[33px] h-[37px]  sm:w-[59px] sm:h-[59px] absolute bottom-2 left-2 object-contain"
      />
    </div>
    <div
      class="flex justify-between gap-[30px] sm:mt-0 mt-2 items-center pb-[11px]"
    >
      <div class="flex flex-col text-start">
        <p class="text-[18px] sm:text-[30px] text-[white] headFont">
          {{ title }}
        </p>

        <p class="text-[10px] sm:text-[14px]">{{ description }}</p>
      </div>
      <GradiantButton
        customClass="text-[14px] sm:text-[16px] h-[45px] px-[35px] gap-[10px] sm:px-[58px]  py-[10px]"
      >
        <template #icon>
          <img class="h-[11px] w-[13px]" src="/src/assets/arr.svg" alt="" />
        </template>
        View
      </GradiantButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GradiantButton from "../../common/GradiantButton.vue";

export default defineComponent({
  name: "ProductCard",
  components: { GradiantButton },
  props: {
    image: { type: String || "" },
    sideImage: { type: String || "" },
    title: { type: String || "" },
    description: { type: String || "" },
    customClass: { type: String, default: "" },
  },
});
</script>
