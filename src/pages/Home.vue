<script setup lang="ts">
import { onMounted } from "vue";
import About from "../components/home/about/About.vue";
import BannerSection from "../components/home/banner/BannerSection.vue";
import ConnectedBrands from "../components/home/connectedBrands/ConnectedBrands.vue";
import ProductSection from "../components/home/products/ProductSection.vue";
import { useDataStore } from "../stores/dataStore";
import Blogs from "../components/home/blogs/Blogs.vue";

const store = useDataStore();

onMounted(() => {
  store.fetchData();
});
</script>

<template>
  <BannerSection />
  <About />
  <ProductSection />
  <ConnectedBrands />
  <Blogs />
</template>
