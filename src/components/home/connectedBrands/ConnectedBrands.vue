<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useDataStore } from "../../../stores/dataStore";
import HeadingComponent from "../../common/HeadingComponent.vue";
import ShortHeading from "../../common/ShortHeading.vue";
import ConnectedCard from "./ConnectedCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import { ref } from "vue";

// Import Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const store = useDataStore();
const { connectedBrands, loading, error } = storeToRefs(store);

// track swiper instance and state
const swiperRef = ref<any>(null);
const isBeginning = ref(true);
const isEnd = ref(false);

const onSwiper = (swiper: any) => {
  swiperRef.value = swiper;
  // initial state
  isBeginning.value = swiper.isBeginning;
  isEnd.value = swiper.isEnd;
};

// handle slide change
const onSlideChange = (swiper: any) => {
  isBeginning.value = swiper.isBeginning;
  isEnd.value = swiper.isEnd;
};
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
          class="custom-prev absolute flex lg:hidden cursor-pointer -left-3 top-1/2 -translate-y-1/2 z-10 disabled:opacity-30 disabled:cursor-not-allowed"
          :disabled="isBeginning"
        >
          <img
            src="/images/left.svg"
            alt="Previous"
            class="w-[30px] sm:w-[59px] h-[25px] sm:h-9"
          />
        </button>

        <!-- 🔘 Pagination (must be before swiper for detection) -->
        <div class="custom-pagination mb-6 flex justify-center"></div>

        <!-- Swiper Section -->
        <Swiper
          :modules="[Navigation, Pagination]"
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
            768: { slidesPerView: 2, centeredSlides: false, spaceBetween: 10 },
            1024: { slidesPerView: 3, centeredSlides: false, spaceBetween: 20 },
          }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"

          class="mySwiper max-w-[1200px] w-full flex justify-center"
        >
          <SwiperSlide
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
          </SwiperSlide>
        </Swiper>

        <!-- ➡️ Right Arrow -->
        <button
          class="custom-next cursor-pointer flex lg:hidden absolute -right-3 top-1/2 -translate-y-1/2 z-10 disabled:opacity-30 disabled:cursor-not-allowed"
          :disabled="isEnd"
        >
          <img
            src="/images/right.svg"
            alt="Next"
            class="w-[30px] sm:w-[59px] h-[25px] sm:h-9"
          />
        </button>
      </div>
    </div>
  </div>
</template>


