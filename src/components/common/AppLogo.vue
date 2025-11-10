<template>
  <div
    @click="$router.push('/')"
    class="cursor-pointer flex items-center"
    :class="customClass"
  >
    <img
      src="/src/assets/Group-1.svg"
      alt="Company Logo"
      class="w-full h-full "
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  customClass?: string;
}>();
</script>
