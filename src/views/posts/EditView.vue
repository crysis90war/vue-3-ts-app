<script setup lang="ts">
import PostWriter from "@/components/udemy/PostWriter.vue";
import type { Post } from "@/models/posts";
import { usePosts } from "@/stores/posts";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const postsStore = usePosts();

const id = route.params.id as string;
const post = postsStore.all.get(id);

if (!post) {
  throw Error(`Post with id : ${id} was not found ...`);
}

async function handleSubmit(post: Post) {
  await postsStore.updatePost(post);
  router.push({ name: "posts" });
}
</script>
<template>
  <PostWriter :post="post" @submit="handleSubmit" />
</template>
<style scoped></style>
