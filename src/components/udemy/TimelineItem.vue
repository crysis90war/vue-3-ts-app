<script setup lang="ts">
import type { TimelinePost } from "../../models/posts";

defineProps<{
  post: TimelinePost;
}>();
</script>

<template>
  <RouterLink
    :to="`/posts/${post.id}`"
    class="list-group-item list-group-item-action"
  >
    {{ post.title }} - {{ post.created.toFormat("d MMM") }}
  </RouterLink>
</template>

<style scoped></style>
