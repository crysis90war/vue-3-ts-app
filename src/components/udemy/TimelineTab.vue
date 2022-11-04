<script setup lang="ts">
import TimelineItem from "./TimelineItem.vue";
import { usePosts } from "../../stores/posts";
import { periods } from "../../constants";

const postsStore = usePosts();
await postsStore.fetchPosts();
</script>

<template>
  <ul class="nav nav-tabs mt-3">
    <li
      v-for="period of periods"
      :key="period"
      class="nav-item"
      @click="postsStore.setSelectedPeriod(period)"
    >
      <a
        class="nav-link"
        :class="{ active: period == postsStore.selectedPeriod }"
        href="#"
      >
        {{ period }}
      </a>
    </li>

    <li class="nav-item">
      <a class="nav-link disabled">Disabled</a>
    </li>
  </ul>

  <div class="list-group mt-3 pt-2">
    <TimelineItem
      v-for="post of postsStore.filteredPosts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<style></style>
