<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useDataStore } from "../../../stores/dataStore";
import HeadingComponent from "../../common/HeadingComponent.vue";
import ShortHeading from "../../common/ShortHeading.vue";
import ConnectedCard from "./ConnectedCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

const store = useDataStore();
const { connectedBrands, loading, error } = storeToRefs(store);
</script>

<template>
  <div class="py-20 container text-center">
    <ShortHeading text="From One Root, Many Branches" />
    <HeadingComponent text="Our Connected Brands" />

    <div class="mt-[11px] sm:mt-[21px]">
      <div v-if="loading" class="text-white text-center">Loading...</div>
      <div v-else-if="error" class="text-red-400 text-center">{{ error }}</div>

      <div
        class="connected-brands-section w-full flex flex-col justify-center items-center py-10 relative"
      >
        <!-- ⬅️ Left Arrow -->
        <button
          class="custom-prev absolute cursor-pointer -left-6 md:left-4 top-1/2 -translate-y-1/2 z-10"
        >
          <img src="/images/left.svg" alt="Previous" class="w-[59px] h-9" />
        </button>

        <!-- Swiper Section -->
        <swiper
          :modules="[Pagination, Navigation]"
          :slides-per-view="1"
          :space-between="10"
        
          :centered-slides="true"
          :navigation="{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }"
          :pagination="{
            clickable: true,
            el: '.custom-pagination',
          }"
          :breakpoints="{
            768: { slidesPerView: 2, centeredSlides: false ,spaceBetween:10},
            1024: { slidesPerView: 3, centeredSlides: false ,spaceBetween:0},
          }"
          class="mySwiper max-w-[1200px] w-full flex justify-center"
        >
          <swiper-slide
            v-for="(brand, index) in connectedBrands"
            :key="index"
            class="flex justify-center text-start items-center"
          >
            <ConnectedCard
              :title="brand.title"
              :description="brand.description"
              :image="brand.image"
              :socialLinks="brand.socialLinks"
            />
          </swiper-slide>
        </swiper>

        <!-- ➡️ Right Arrow -->
        <button
          class="custom-next cursor-pointer absolute -right-6 md:right-4 top-1/2 -translate-y-1/2 z-10"
        >
          <img src="/images/right.svg" alt="Next" class="w-[59px] h-9" />
        </button>

        <!-- 🔘 Pagination Dots -->

        <div class="custom-pagination  mt-6 flex justify-center"></div>
      </div>
    </div>
  </div>
</template>
