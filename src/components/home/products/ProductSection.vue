<script setup lang="ts">
import { products } from "../../../data/data";

import HeadingComponent from "../../common/HeadingComponent.vue";
import ShortHeading from "../../common/ShortHeading.vue";
import ProductCard from "./ProductCard.vue";
</script>

<template>
  <div class="container text-center py-10  sm:py-20">
    <ShortHeading text="Innovative" />
    <HeadingComponent text="Products" />

    <div
      class="grid mt-[30px] sm:mt-[50px] grid-cols-1 justify-items-center lg:grid-cols-2 gap-6"
    >
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :image="product.image"
        :title="product.title"
        :sideImage="product.sideImg"
        :description="product.description"
        customClass="max-w-[586px]"
      />
    </div>
  </div>
</template>
