<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const showButton = ref(false);

const handleScroll = () => {
  showButton.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <!-- Back to Top Button -->
  <transition name="fade">
    <div
      v-if="showButton"
      @click="scrollToTop"
      class="fixed bottom-8 z-100 lg:w-[90px] w-[70px] h-[70px] lg:h-[90px] cursor-pointer right-[27px] rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all"
    >
      <img class="w-full h-full" src="/src/assets/back.svg" alt="" srcset="" />
    </div>
  </transition>
</template>

<style scoped>
/* Fade-in animation for button */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
