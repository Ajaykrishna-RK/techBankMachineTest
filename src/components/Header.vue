<script setup lang="ts">
import { ref } from "vue";

import { RouterLink } from "vue-router";
import AppLogo from "./common/AppLogo.vue";
import { menuRoutes } from "../router";
import ContactButton from "./common/ContactButton.vue";

const isOpen = ref(false);
const toggleMenu = () => (isOpen.value = !isOpen.value);
const closeMenu = () => (isOpen.value = false);
</script>

<template>
  <header class="w-full fixed top-0 left-0 z-50 bg-black">
    <div
      class="container text-white py-[18px] flex items-center justify-between shadow-md"
    >
      <!-- Logo -->
      <AppLogo customClass="w-[129px]  h-[34px]" />

      <!-- Desktop Menu -->
      <nav class="hidden lg:flex items-center space-x-6">
        <RouterLink
          v-for="(link, index) in menuRoutes"
          :key="link.name"
          :to="link.path"
          class="relative px-[15px] xl:px-[26px] py-[9px] hover:text-[rgba(225,200,255,1)] transition"
          active-class="text-[rgba(225,200,255,1)]"
        >
          {{ link.name }}
          <span
            v-if="index !== menuRoutes.length - 1"
            class="absolute -right-3 top-1/2 -translate-y-1/2 w-px h-[37px] bg-gray-700"
          ></span>
        </RouterLink>
      </nav>

      <ContactButton
        to="/contact"
        text="contact us"
        customClass="hidden lg:flex"
        :onClick="closeMenu"
      />

      <!-- Mobile Menu Toggle -->
      <button
        @click="toggleMenu"
        class="lg:hidden shrink-0 text-[50px] font-light text-white"
      >
        <img
          v-if="!isOpen"
          class="w-6 h-6 transition-transform duration-300"
          src="/src/assets/menu.svg"
          alt="Menu"
        />
        <img
          v-else
          class="w-6 h-6 transition-transform duration-300"
          src="/src/assets/close.png"
          alt="Menu"
        />
      </button>

      <!-- Mobile Menu -->
      <div
        v-if="isOpen"
        class="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center space-y-4 py-4 lg:hidden"
      >
        <RouterLink
          v-for="route in menuRoutes"
          :key="route.name + '-mobile'"
          :to="route.path"
          @click="closeMenu"
          class="hover:text-[rgba(225,200,255,1)]"
        >
          {{ route.name }}
        </RouterLink>

    
        <ContactButton 
          to="/contact"
          text="contact us"
          customClass="flex"
          :onClick="closeMenu"
        />
      </div>
    </div>
  </header>
</template>
