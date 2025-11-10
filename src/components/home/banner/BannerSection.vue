<script setup lang="ts">
import GradientButton from "../../common/GradiantButton.vue";
</script>

<template>
  <section
    class="relative  w-full container flex h-[90vh] sm:h-[800px] md:h-[880px] items-center justify-center bg-black overflow-hidden"
    style="height: 830px"
  >
    <!-- Desktop Banner -->
    <img
      src="/images/banner/banner-1.png"
      alt="Banner"
      class="hidden sm:block w-full h-full object-fill xl:object-contain"
    />

    <!-- Mobile Banner -->
    <img
      src="/images/banner/bannerMob.png"
      alt="Mobile Banner"
      class="block sm:hidden w-full h-full object-fill"
    />
    <div
      class="top-4 xl:top-10 absolute max-w-[500px] hidden lg:flex items-start right-12 xl:right-30"
    >
      <img class="w-[100px]" src="/images/banner/icon.png" alt="" srcset="" />
      <p class="text-[rgba(186,186,186,1)]">
        At TechBank, we’re pioneering the technologies of tomorrow. From
        blockchain to AI, we’re building the digital landscape of the future,
        today.
      </p>
    </div>
    <div
      class="absolute top-8 lg:top-24 left-1/2 -translate-x-1/2 rotate-15 md:rotate-22"
    >
      <img
        src="/images/banner/comp.gif"
        class="w-[200px] md:w-full h-[600px] md:h-[750px]"
      />
    </div>

    <div class="top-28 absolute">
      <img
        class="md:h-full h-[138px]"
        src="/images/banner/small.png"
        alt=""
        srcset=""
      />
    </div>
    <div
      class="absolute text-[rgba(0,0,0,1)] bottom-10 items-center justify-center text-center leading-[1.1]"
    >
      <div
        class="text-[35px] md:text-[72px] xl:text-[94px] flex flex-col headFont"
      >
        <p class="">Engineering</p>
        <p class="">the Future</p>
      </div>
      <div
        class="flex flex-col xl:flex-row gap-7 xl:gap-[50px] mt-[30px] w-full max-w-[800px] mx-auto justify-center items-center"
      >
        <!-- Text block -->
        <div
          class="text-[14px] md:text-[15px] leading-[100%] text-center xl:text-start"
        >
          <p>Empowering Businesses, Enabling Growth</p>
          <p class="mt-1">TechBank’s Products for Success</p>
        </div>

        <!-- Gradient Button -->
        <GradientButton
          customClass="text-[14px] sm:text-[16px] pl-[18px] pr-[5px] h-[60px]"
        >
          <template #icon>
            <img
              class="h-[52px] w-[52px]"
              src="/src/assets/butArrow.png"
              alt=""
            />
          </template>
          View Products
        </GradientButton>
      </div>
    </div>
  </section>

  <div
    class="gap-[21px] uppercase text-white text-[12px] mt-[21px] mx-auto md:text-[16px] justify-center items-center flex max-w-[250px]"
  >
    <p>+</p>
    <p class="">Scroll to explore</p>
    <p>+</p>
  </div>
</template>
