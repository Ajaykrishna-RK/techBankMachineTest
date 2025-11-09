<script setup lang="ts">
import { defineComponent } from "vue";
import { appStats } from "../../../data/data";
import DescComponent from "../../common/DescComponent.vue";
import HeadingComponent from "../../common/HeadingComponent.vue";
import TextBlock from "../../common/TextBlock.vue";
defineComponent({
  name: "PageComponent",
  components: {
    HeadingComponent,
  },
});
</script>

<template>
  <div class=" justify-center items-center py-[122px] gap-[22px] flex flex-col container">
    <HeadingComponent text="About" />

    <div class="max-w-[759px] text-center">
      <DescComponent
        text="TechBank is a blockchain product company creating decentralized tools like
        TechBank, Dbank, and Dwallet to simplify digital finance. We empower users
        with secure, transparent, and user-friendly solutions for managing assets
        in the Web3 world."
      />
    </div>

    <div class="flex mt-[15px]">
      <TextBlock
        v-for="(stat, index) in appStats"
        :key="stat.id"
        :showBorder="index === 0 || index === 1"
        customClass=""
      >
        <template #head>
          <p>{{ stat.count }}</p>
        </template>
        <template #text>
          <p>{{ stat.name }}</p>
        </template>
      </TextBlock>
    </div>
  </div>
</template>

