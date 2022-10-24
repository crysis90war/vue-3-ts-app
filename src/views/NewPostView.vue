<script setup lang="ts">
import type { TimelinePost } from "@/models/posts";
import { DateTime } from "luxon";
import PostWriter from "../components/udemy/PostWriter.vue";

const post: TimelinePost = {
  id: "-1",
  title: "Title",
  created: DateTime.now(),
  markdown: "## Title",
};
</script>
<template>
  <div>new post</div>
  <PostWriter :post="post" />
</template>

<style></style>
