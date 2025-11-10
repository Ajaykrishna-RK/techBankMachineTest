<script setup lang="ts">
import Header from "./components/Header.vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "./components/Footer.vue";
import BackToTop from "./components/common/BackToTop.vue";
</script>

<template>
  <div
    class="min-h-screen overflow-x-hidden overflow-y-auto bg-black text-[rgba(192,192,192,1)]"
  >
    <Header />
    <div class="mt-[130px] lg:mt-[100px]">
      <router-view />
    </div>
    <BackToTop />
    <Footer />
  </div>
</template>
