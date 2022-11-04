<script setup lang="ts">
import { computed } from "vue";
import { usePosts } from "@/stores/posts";
import { useUsers } from "@/stores/users";
import { useRoute } from "vue-router";

const route = useRoute();
const postsStore = usePosts();
const usersStore = useUsers();

const id = route.params.id as string;
const post = postsStore.all.get(id);

if (!post) {
  throw Error(`Post with id ${id} was not found`);
}

const canEdit = computed(() => {
  if (!usersStore.currentUserId) {
    return false;
  }
  if (usersStore.currentUserId !== post.authorId) {
    return false;
  }
  return true;
});
</script>
<template>
  <RouterLink
    v-if="canEdit"
    class="btn btn-outline-primary mb-5"
    :to="`/posts/${id}/edit`"
  >
    Edit
  </RouterLink>
  <h1 class="text-center">{{ post.title }}</h1>
  <div class="row">
    <div class="col">
      <div v-html="post.html"></div>
      <span class="text-warning"> Created at {{ post.created }} </span>
    </div>
    <div class="col"></div>
  </div>
</template>
<style scoped></style>
