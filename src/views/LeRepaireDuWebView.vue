<script setup lang="ts">
import { ref } from "vue";
import { results, type Result } from "../models/repairweb";

const finalValue = ref<number[]>([]);
const calculate = (): void => {
  finalValue.value = [];
  results.map((result: Result) => {
    finalValue.value.push(
      result.stages
        .map((stage) => stage.maxPoints)
        .reduce((prvVal, curVal) => prvVal + curVal, 0)
    );
  });
};
</script>

<template>
  <h1>Le Repaire Du Web</h1>
  <button @click="calculate()">click me</button>
  <p v-for="value in finalValue" :key="value">{{ value }}</p>
</template>

<style scoped></style>
