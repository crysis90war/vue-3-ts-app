<script setup lang="ts">
import { computed } from "vue";
import type { Status } from "../../validation";
interface Prop {
  name: string;
  modelValue: string;
  status: Status;
  type: string;
}
const props = defineProps<Prop>();

const emit = defineEmits<{
  (event: "update:modelValue", value: string): void;
}>();

function handleInput(e: Event) {
  const value = (e.target as HTMLInputElement).value;
  emit("update:modelValue", value);
}

const modalClass = computed(() => {
  return !props.status.valid ? "is-invalid" : "is-valid";
});
</script>
<template>
  <div class="input-group has-validation">
    <div class="form-floating mb-3" :class="modalClass">
      <input
        :type="type"
        class="form-control"
        :class="modalClass"
        :id="props.name"
        placeholder=""
        :value="modelValue"
        @input="handleInput"
      />
      <label :for="props.name">{{ props.name }}</label>
    </div>
    <div class="invalid-feedback">{{ status.message }}</div>
    <div class="valid-feedback">Looks good!</div>
  </div>
</template>
<style scoped></style>
