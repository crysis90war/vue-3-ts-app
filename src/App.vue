<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/navbar/NavBar.vue";
import SingupForm from "@/components/udemy/SingupForm.vue";
import SinginForm from "@/components/udemy/SinginForm.vue";
</script>

<template>
  <header>
    <header>
      <NavBar />
    </header>
  </header>

  <!-- <Teleport to="#modal">
    <SingupForm />
  </Teleport> -->

  <div class="container mt-4">
    <RouterView />
  </div>

  <SingupForm />
  <SinginForm />
</template>

<style>
@import "highlight.js/styles/atom-one-dark.css";
</style>
