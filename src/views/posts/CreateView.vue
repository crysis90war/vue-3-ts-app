<script setup lang="ts">
import { DateTime } from "luxon";
import type { Post, TimelinePost } from "@/models/posts";
import PostWriter from "@/components/udemy/PostWriter.vue";
import { useUsers } from "@/stores/users";
import { useRouter } from "vue-router";
import { usePosts } from "@/stores/posts";

const usersStore = useUsers();
const router = useRouter();
const postsStore = usePosts();

if (!usersStore.currentUserId) {
  throw Error("User was not found!");
}

const post: TimelinePost = {
  id: "-1",
  title: "Title",
  authorId: usersStore.currentUserId,
  created: DateTime.now(),
  markdown: "## Title",
  html: "<h2>Title</h2>",
};

async function handleSubmit(post: Post) {
  await postsStore.createPost(post);
  router.push({ name: "posts" });
}
</script>
<template>
  <div>new post</div>
  <PostWriter :post="post" @submit="handleSubmit" />
</template>

<style></style>
