<script setup lang="ts">
import type { Car } from "../../models/cars";

defineProps<{
  car: Car;
}>();
</script>
<template>
  <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1">{{ car.brand }} - {{ car.model }}</h5>
    <small>{{ car.release.toFormat("MMM yyyy") }}</small>
  </div>
  <p class="mb-1">
    {{ car.description === undefined ? "No description" : car.description }}
  </p>
  <small>HP : {{ car.hp }} - KW : {{ car.kw }}</small>
</template>
<style></style>
