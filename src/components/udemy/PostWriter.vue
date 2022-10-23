<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { TimelinePost } from "@/models/posts";

const props = defineProps<{
  post: TimelinePost;
}>();

const title = ref(props.post.title);
const contenteditable = ref<HTMLDivElement>();
console.log(contenteditable.value);

onMounted(() => {
  console.log("Mounted!");
  console.log(contenteditable.value?.innerText);
});
</script>

<template>
  <div class="form-floating mb-3">
    <input
      type="text"
      class="form-control"
      id="floatingInput"
      placeholder="title"
      v-model="title"
    />
    <label for="floatingInput">Title</label>
  </div>

  <div contenteditable ref="contenteditable">This is the post.</div>
</template>
