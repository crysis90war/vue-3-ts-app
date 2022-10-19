<script setup lang="ts">
import type { TimelinePost } from "../../models/posts";

defineProps<{
  post: TimelinePost;
}>();
</script>

<template>
  <button type="button" class="list-group-item list-group-item-action">
    {{ post.title }} - {{ post.created.toFormat("d MMM") }}
  </button>
</template>

<style scoped></style>
