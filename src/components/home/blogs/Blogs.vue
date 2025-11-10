<script setup lang="ts">
import { storeToRefs } from "pinia";
import HeadingComponent from "../../common/HeadingComponent.vue";
import ShortHeading from "../../common/ShortHeading.vue";
import BlogsCard from "./BlogsCard.vue";
import { useDataStore } from "../../../stores/dataStore";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import { ref } from "vue";

const store = useDataStore();
const { blogs, loading, error } = storeToRefs(store);
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
  <div class="py-10 sm:py-20 container text-center">
    <ShortHeading text="Techbank" />

    <HeadingComponent text="Blogs" />

    <div class="sm:mt-[21px]">
      <div v-if="loading" class="text-white text-center">Loading...</div>
      <div v-else-if="error" class="text-red-400 text-center">{{ error }}</div>

      <div
        class="connected-brands-section w-full flex flex-col justify-center items-center py-10 relative"
      >
        <!-- ⬅️ Left Arrow -->
        <button
          :disabled="isBeginning"
          class="custom-prev absolute cursor-pointer -left-4 top-1/2 disabled:opacity-30 disabled:cursor-not-allowed -translate-y-1/2 z-10"
        >
          <img
            src="/images/left.svg"
            alt="Previous"
            class="w-[30px] sm:w-[59px] h-[25px] sm:h-9"
          />
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
            768: { slidesPerView: 2, centeredSlides: false, spaceBetween: 10 },
            1024: { slidesPerView: 3, centeredSlides: false, spaceBetween: 20 },
          }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          class="mySwiper max-w-[1200px] w-full flex flex-col justify-center"
        >
          <swiper-slide
            v-for="(item, index) in blogs"
            :key="index"
            class="flex justify-center text-start items-center"
          >
            <BlogsCard
              :key="index"
              :image="item.image"
              :title="item.title"
              :description="item.description"
            />
          </swiper-slide>

          <!-- ✅ Pagination inside Swiper -->
          <div class="custom-pagination mt-6 mb-2 flex justify-center"></div>
        </swiper>

        <!-- ➡️ Right Arrow -->
        <button
          :disabled="isEnd"
          class="custom-next cursor-pointer absolute disabled:opacity-30 disabled:cursor-not-allowed -right-4 top-1/2 -translate-y-1/2 z-10"
        >
          <img
            src="/images/right.svg"
            alt="Next"
            class="w-[30px] sm:w-[59px] h-[25px] sm:h-9"
          />
        </button>

        <!-- 🔘 Pagination Dots -->

        <div class="custom-pagination mt-6 flex justify-center"></div>
      </div>
    </div>
  </div>
</template>
