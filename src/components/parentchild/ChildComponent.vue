<script setup lang="ts">
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
function addEventListener(event: { target: HTMLInputElement }) {
  const target = event.target as HTMLInputElement;
  return target.value;
}
</script>
<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', addEventListener)"
  />
</template>
<style></style>
