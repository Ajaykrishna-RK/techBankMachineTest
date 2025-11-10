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
  <div class="min-h-screen bg-black">
    <div
      class="container flex flex-col lg:flex-row gap-4  lg:gap-[66px] py-20 lg:py-40"
    >
      <!-- Left Card (Image Section) -->
      <div class="lg:hidden text-center grid">
        <p
          class="text-[13px] sm:text-[15px] text-[rgba(187,131,255,1)] uppercase tracking-wide"
        >
          Build the future with us
        </p>

        <h2
          class="text-[36px] sm:text-[40px] xl:text-[58px] headFont text-[rgba(255,255,255,1)] mt-1 sm:mt-2"
        >
          CONTACT US
        </h2>
      </div>
      <div
        class="w-full h-[238px] sm:h-[500px] mx-auto lg:h-[700px] max-w-[597px] relative"
      >
        <img
          src="/images/contact/1.jpeg"
          alt="Contact Illustration"
          class="rounded-xl h-full w-full object-fill sm:object-cover"
        />
        <div
          class="absolute inset-x-0 top-[11px] sm:top-[35px] px-4 text-center text-[rgba(0,0,0,1)] headFont text-[12px] sm:text-[20px] xl:text-[28px] leading-[1.4] flex justify-center items-center"
        >
          <p class="max-w-[210px] sm:max-w-[550px]">
            LET’S CONNECT AND CREATE THE NEXT BIG THING IN TECH
          </p>
        </div>
      </div>

      <!-- Right Form Section -->
      <div
        class="w-full flex flex-col justify-center items-center text-center lg:text-left"
      >
        <div class="lg:grid hidden">
          <p
            class="text-[13px] sm:text-[15px] text-[rgba(187,131,255,1)] uppercase tracking-wide"
          >
            Build the future with us
          </p>

          <h2
            class="text-[36px] sm:text-[40px] xl:text-[58px] headFont text-[rgba(255,255,255,1)] mt-2"
          >
            CONTACT US
          </h2>
        </div>

        <form
          class="flex flex-col text-start justify-center items-center w-full gap-2 sm:gap-4 mt-[30px] sm:mt-[34px]"
        >
          <div
            class="w-full text-start justify-center items-start flex flex-col"
          >
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
          </div>
          <div class="flex flex-col gap-2 w-full max-w-[561px]">
            <label class="text-sm text-gray-300 font-medium">Message</label>
            <textarea
              v-model="message"
              placeholder="Write your message"
              rows="4"
              class="bg-[rgba(26,26,26,1)] border border-[rgba(71,71,71,1)] rounded-md px-4 py-3 text-gray-200 focus:outline-none transition-all resize-none"
            ></textarea>
          </div>

          <GradientButton
            customClass="text-[14px] mt-[30px] sm:text-[16px] pl-[18px] pr-[5px] h-[60px]"
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
  </div>
</template>
