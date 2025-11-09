<script setup lang="ts">
import { ref } from "vue";
import BaseInput from "../common/BaseInput.vue";
import GradientButton from "../common/GradiantButton.vue";

const name = ref("");
const email = ref("");
const phone = ref("");
const message = ref("");


</script>

<template>
  <div
    class="min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-20 gap-16"
  >
    <!-- Left Card -->
    <div
      class="bg-[#0d0d0d] rounded-2xl shadow-lg overflow-hidden w-full md:w-[500px] h-auto flex flex-col items-center justify-center p-6"
    >
      <img
        src="/images/contact/1.jpeg"
        alt="Contact Illustration"
        class="rounded-2xl w-full object-cover"
      />
      <p class="font-[Orbitron] text-center text-lg md:text-xl mt-4 text-white">
        LET’S CONNECT AND CREATE THE NEXT BIG THING IN TECH
      </p>
    </div>

    <!-- Right Form -->
    <div class="w-full md:w-[450px] flex flex-col gap-6">
      <p class="text-xs text-purple-400 uppercase tracking-wide">
        Build the future with us
      </p>
      <h2 class="text-4xl font-[Orbitron] font-bold text-white">CONTACT US</h2>

      <form class="flex flex-col gap-5 mt-4">
        <BaseInput
          label="Name"
          placeholder="Enter Your Name"
          v-model="name"
          required
        />
        <BaseInput
          label="Email"
          type="email"
          placeholder="Enter Email"
          v-model="email"
          required
        />
        <BaseInput
          label="Phone Number"
          placeholder="Enter Your Phone Number"
          v-model="phone"
          required
        />
        <div class="flex flex-col gap-2">
          <label class="text-sm text-gray-300 font-medium">Message</label>
          <textarea
            v-model="message"
            placeholder="Write your message"
            rows="4"
            class="bg-transparent border border-gray-600 rounded-md px-4 py-3 text-gray-200 focus:outline-none focus:border-purple-500 transition-all resize-none"
          ></textarea>
        </div>

        <!-- <button
          type="submit"
          class="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-400 text-white rounded-full px-8 py-3 text-sm font-medium hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition"
        >
          Send Message
          <span class="text-lg">↗</span>
        </button> -->

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
          Send Message
        </GradientButton>
      </form>
    </div>
  </div>
</template>
