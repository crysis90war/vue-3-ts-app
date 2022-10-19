<script setup lang="ts">
import CarlineList from "../components/cars/CarlineList.vue";
import { useCars } from "../stores/cars";
const carsStore = useCars();
</script>
<template>
  <div class="row">
    <div class="col">
      <CarlineList />
    </div>
    <div class="col">
      <div v-if="carsStore.selectedCar === undefined">Please select a car</div>
      <div v-else>
        You have selected {{ carsStore.getSelectedCar?.brand }}
        {{ carsStore.getSelectedCar?.model }}
      </div>
    </div>
  </div>
</template>
<style scoped></style>
