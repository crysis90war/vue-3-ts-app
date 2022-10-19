<script setup lang="ts">
import { brands } from "../../constants";
import { useCars } from "../../stores/cars";
import CarlineItem from "./CarlineItem.vue";

const carsStore = useCars();
</script>
<template>
  <select
    v-model="carsStore.selectedBrand"
    class="form-select"
    aria-label="Default select example"
  >
    <option
      v-for="brand of brands"
      :key="brand"
      :value="brand"
      :class="brand === '' ? 'selected' : ''"
    >
      {{ brand }}
    </option>
  </select>

  <div v-if="carsStore.filteredCars.length === 0">NO DATA</div>

  <div v-else class="list-group mt-3">
    <button
      v-for="car of carsStore.filteredCars"
      :key="car.id"
      class="list-group-item list-group-item-action"
      aria-current="true"
      @click="carsStore.setSelectedCar(car)"
    >
      <CarlineItem :car="car" />
    </button>
  </div>
</template>
<style></style>
