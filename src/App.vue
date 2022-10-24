<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/navbar/NavBar.vue";
</script>

<template>
  <header>
    <header>
      <NavBar />
    </header>
  </header>

  <div class="container mt-4">
    <RouterView />
  </div>
</template>

<style>
@import "highlight.js/styles/atom-one-dark.css";
</style>
