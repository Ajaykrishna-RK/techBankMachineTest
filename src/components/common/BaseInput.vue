<template>
  <div class="flex flex-col gap-2 w-full">
    <label v-if="label" :for="id" class="text-sm text-gray-300 font-medium">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>

    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      class="w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 text-gray-200 focus:outline-none focus:border-purple-500 transition-all"
      @input="onInput"
    />
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
