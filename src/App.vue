<script setup lang="ts">
import Header from "./components/Header.vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div
    class="min-h-screen overflow-x-hidden overflow-y-auto bg-black text-[rgba(192,192,192,1)]"
  >
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
