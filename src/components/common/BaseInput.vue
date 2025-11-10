<template>
  <div class="w-full flex justify-center">
    <div class="w-full max-w-[561px] flex flex-col items-start ">
      <!-- Label -->
      <label
        v-if="label"
        :for="id"
        class="text-sm  text-gray-300 font-medium text-left w-full"
      >
        {{ label }}
        <span v-if="required" class="text-white">*</span>
      </label>

      <!-- Input -->
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :required="required"
        class="w-full bg-[rgba(26,26,26,1)] mb-4 mt-2 border border-[rgba(71,71,71,1)] rounded-md px-4 py-3 text-gray-200 text-left focus:outline-none focus:border-[rgba(187,131,255,1)] transition-all"
        @input="onInput"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  type: { type: String, default: "text" },
  required: { type: Boolean, default: false },
  id: String,
});

const emit = defineEmits(["update:modelValue"]);

function onInput(event: Event) {
  const target = event.target as HTMLInputElement | null;
  if (target) {
    emit("update:modelValue", target.value);
  }
}
</script>
