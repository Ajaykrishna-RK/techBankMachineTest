<template>
  <RouterLink
    :to="to || '/contact'"
    @click="onClick"
    class="rounded-[50px] w-fit cursor-pointer text-white py-2 px-[18px] uppercase border border-white flex items-center justify-center transition-colors duration-300 hover:text-[rgba(225,200,255,1)]"
    :class="customClass"
  >
    {{ text }}
  </RouterLink>
</template>

<script setup lang="ts">
defineProps<{
  to?: string; // route path
  text?: string; // button text
  customClass?: string; // extra class names
  onClick?: () => void; // optional handler
}>();
</script>
