<script setup lang="ts">
import { ref } from "vue";
const arrays = ref<string[]>(["One", "Two", "Three", "Four", "Five"]);
const foundItem = ref<string>();
const item = ref<string>("");
const addItem = (): void => {
  if (!itemExists()) {
    arrays.value.push(capitalizeFirstChar(item.value));
    item.value = "";
  }
};
const removeItem = (index: number): void => {
  arrays.value.splice(index, 1);
};
const cleanArray = (): void => {
  arrays.value = [];
};
const findWithIndex = (index: number) => {
  foundItem.value = arrays.value[index];
};
/**
 * Function that returns an input word with spaces excessif removed and the first letter capitalized.
 * @param input input string to capitalize.
 */
const capitalizeFirstChar = (input: string): string => {
  let output: string = input.trim();
  return output.charAt(0).toUpperCase() + output.slice(1);
};
const itemExists = (): boolean => {
  if (arrays.value.includes(capitalizeFirstChar(item.value))) {
    return true;
  }
  return false;
};
</script>

<template>
  <h1 class="has-text-centered">Training</h1>
  <div class="field">
    <label class="label">Item to add</label>
    <div class="control">
      <input
        v-model="item"
        class="input"
        :class="{ 'is-danger': itemExists() === true }"
        type="text"
        placeholder="Text input"
        @:change="itemExists"
        @keyup.enter="addItem"
      />
    </div>
    <p class="help">Please type and enter to add</p>
    <p v-if="itemExists()" class="help is-danger">This item already exists !</p>
  </div>

  <button class="button is-danger is-small" @click="cleanArray">Clean</button>
  <div v-for="(array, index) of arrays" :key="index" class="pb-1">
    <span
      >{{ index + 1 }} - <code>{{ array }}</code></span
    >
    <input
      class="button is-small is-danger ml-2"
      type="button"
      value="-"
      @click="removeItem(index)"
    />
    <input
      class="button is-small is-secondary ml-2"
      type="button"
      value="?"
      @click="findWithIndex(index)"
    />
  </div>
  <br />
  <p>Found item : {{ foundItem }}</p>
</template>
<style scoped></style>
