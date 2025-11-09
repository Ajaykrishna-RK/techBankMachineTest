<script setup lang="ts">
import { socialLinks } from "../data/data";
import { routes } from "../router";
</script>

<template>
  <div class="mt-28 relative sm:h-[850px] h-[700px] md:h-[600px]">
    <div class="container ">
      <div class="grid md:flex justify-between w-full">
        <div class="flex items-center sm:h-[51px] h-[34px]">
          <img
            src="/src/assets/Group-1.svg"
            alt="Company Logo"
            class="w-full h-full"
          />
        </div>

        <p class="text-[18px] md:mt-0 mt-[21px]">hi@techbank.com</p>
      </div>

      <div class=" grid md:flex justify-between mt-[26px] sm:mt-20 w-full">
        <div class="flex flex-col z-10">
          <p
            class="headFont text-[24px] sm:text-[32px] text-[rgba(255,255,255,1)]"
          >
            Engineering
          </p>
          <p
            class="headFont text-[24px] sm:text-[32px] text-[rgba(255,255,255,1)]"
          >
            the Future
          </p>

          <button
            class="rounded-[50px] text-[16px] w-fit text-[white] cursor-pointer mt-[25px] sm:mt-[30px] py-[9px] sm:py-4 px-[23px] sm:px-[30px] uppercase border border-white"
          >
            contact us
          </button>
        </div>
        <div
          class="flex md:mt-0 z-10 mt-[30px] justify-between gap-20 lg:gap-[150px] text-[14px] sm:text-[20px] lg:pr-20"
        >
          <!-- Left column: nav links -->
          <ul class="space-y-3 ">
            <li v-for="route in routes" :key="route.path">
              <RouterLink
                :to="route.path"
                class="hover:underline"
                active-class="underline"
              >
                {{ route.name }}
              </RouterLink>
            </li>
          </ul>

          <!-- Right column: office info -->
          <ul class="space-y-3">
            <li class="font-semibold">Offices</li>
            <li class="mt-[21px]">Infopark</li>
            <li>Kochi - Kerala</li>
          </ul>
        </div>
      </div>

      <div
        class="hidden  md:flex justify-between text-[18px] text-[rgba(251,253,255,1)] mt-10 items-center"
      >
        <div v-if="socialLinks?.length" class="flex z-10 items-center gap-[27px]">
          <img
            v-for="(icon, index) in socialLinks"
            :key="index"
            :src="icon"
            :alt="`social-link-${index}`"
            class="w-[26px] h-[26px] cursor-pointer hover:opacity-80 transition-opacity duration-200"
          />
        </div>
        <p class="md:mt-0 mt-[22px] z-10">© 2025 Techbank</p>
        <div class="text-[18px] md:mt-0 z-10 mt-[11px] flex gap-[21px]">
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
      </div>

      <div
        class="justify-center md:hidden mt-[41px] items-center flex flex-col"
      >
        <div v-if="socialLinks?.length" class="flex z-10 items-center gap-[27px]">
          <img
            v-for="(icon, index) in socialLinks"
            :key="index"
            :src="icon"
            :alt="`social-link-${index}`"
            class="w-[26px] h-[26px] cursor-pointer hover:opacity-80 transition-opacity duration-200"
          />
        </div>
        <div
          class="w-full flex mt-[21px] py-[11px] z-10 justify-center items-center gap-[41px] border-y border-y-[rgba(251,253,255,0.15)]"
        >
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
      </div>
    </div>
    <!-- 
    <div class="absolute inset-x-0 bottom-0 -z-10 overflow-hidden">
      <img
        src="/src/assets/footerLogo.png"
        alt="Company Logo"
        class="w-full h-auto"
      />
    </div> -->

    <div class="absolute inset-x-0 bottom-0 z-0 overflow-hidden">
      <img
        src="/src/assets/footerLogo.png"
        alt="Company Logo"
        class="w-full h-auto object-cover"
      />
    </div>
  </div>
</template>
