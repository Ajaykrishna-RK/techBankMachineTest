<script setup lang="ts">
import { ref } from "vue";
import { routes } from "../router"; // ✅ Import your routes
import { RouterLink } from "vue-router";

const isOpen = ref(false);
const toggleMenu = () => (isOpen.value = !isOpen.value);
const closeMenu = () => (isOpen.value = false);
</script>

<template>
  <header class="w-full  sticky top-0 z-50">
    <div
      class="container text-white py-[18px] flex items-center justify-between shadow-md"
    >
      <!-- Logo -->
      <div class="flex items-center h-[34px] w-[129px] space-x-3">
        <img
          src="/src/assets/Group-1.svg"
          alt="Company Logo"
          class="object-contain w-full h-full"
        />
      </div>

      <!-- Desktop Menu -->
      <nav class="hidden lg:flex items-center space-x-6">
        <RouterLink
          v-for="(link, index) in routes"
          :key="link.name"
          :to="link.path"
          class="relative px-[15px] xl:px-[26px] py-[9px] hover:text-[rgba(225,200,255,1)] transition"
          active-class="text-[rgba(225,200,255,1)]"
        >
          {{ link.name }}
          <span
            v-if="index !== routes.length - 1"
            class="absolute right-[-0.75rem] top-1/2 -translate-y-1/2 w-px h-[37px] bg-gray-700"
          ></span>
        </RouterLink>
      </nav>

      <!-- Desktop Contact Button -->
      <button
        class="rounded-[50px] hidden lg:flex cursor-pointer py-2 px-[18px] uppercase border border-white"
      >
        contact us
      </button>

      <!-- Mobile Menu Toggle -->
      <button
        @click="toggleMenu"
        class="lg:hidden shrink-0 text-[50px] font-light text-white"
      >
        ☰
      </button>

      <!-- Mobile Menu -->
      <div
        v-if="isOpen"
        class="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center space-y-4 py-4 lg:hidden"
      >
        <RouterLink
          v-for="route in routes"
          :key="route.name + '-mobile'"
          :to="route.path"
          @click="closeMenu"
          class="hover:text-[rgba(225,200,255,1)]"
        >
          {{ route.name }}
        </RouterLink>

        <button
          class="rounded-[50px] cursor-pointer mt-[30px] py-2 px-[18px] uppercase border border-white"
        >
          contact us
        </button>
      </div>
    </div>
  </header>
</template>
