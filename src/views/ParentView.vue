<script setup lang="ts">
import { ref } from "vue";
import ChildComponent from "../components/parentchild/ChildComponent.vue";
const my_model = ref<string>();
</script>
<template>
  <ChildComponent v-model="my_model" />
  The value of my_model : {{ my_model }}
</template>
<style></style>
