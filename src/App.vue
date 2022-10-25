<script setup lang="ts">
import { RouterView } from "vue-router";
import { useModal } from "./composables/modal";
import NavBar from "./components/navbar/NavBar.vue";
import SingupForm from "@/components/udemy/SingupForm.vue";

const modal = useModal();

// onMounted(() => {
//   console.log(document.querySelector("#modal"));
// });
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

  <SingupForm />

  <div class="container mt-4">
    <RouterView />
  </div>
</template>

<style>
@import "highlight.js/styles/atom-one-dark.css";
</style>
