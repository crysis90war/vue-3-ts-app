<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import type { Post, TimelinePost } from "@/models/posts";
import { marked } from "marked";
import highlightjs from "highlight.js";
import { debounce } from "lodash";
import { useUsers } from "@/stores/users";

const props = defineProps<{
  post: TimelinePost | Post;
}>();

const emit = defineEmits<{
  (event: "submit", post: Post): void;
}>();

const title = ref(props.post.title);
const content = ref(props.post.markdown);
const html = ref("");
const contentEditable = ref<HTMLDivElement>();

const usersStore = useUsers();

/* This is the same as using immediate for watch. Example in watch */
// watchEffect(() => {
//   marked.parse(content.value, (err, parseResult) => {
//     html.value = parseResult;
//   });
// });

// watch(content, debounce(parseHtml, 250), {
//   immediate: true,
// });

watch(
  content,
  debounce((newContent) => {
    parseHtml(newContent);
  }, 250),

  {
    immediate: true,
  }
);

onMounted(() => {
  if (!contentEditable.value) {
    throw Error("ContentEditable DOM node was not found");
  }
  contentEditable.value.innerText = content.value;
});

function parseHtml(markdown: string) {
  marked.parse(
    markdown,
    {
      gfm: true,
      breaks: true,
      highlight: (code) => {
        return highlightjs.highlightAuto(code).value;
      },
    },
    (err, parseResult) => {
      html.value = parseResult;
    }
  );
}

function handleInput() {
  if (!contentEditable.value) {
    throw Error("ContentEditable DOM node was not found");
  }
  content.value = contentEditable.value?.innerText;
}

async function handleClick() {
  if (!usersStore.currentUserId) {
    throw Error("User as not found");
  }
  const newPost: Post = {
    ...props.post,
    created:
      typeof props.post.created === "string"
        ? props.post.created
        : props.post.created.toISO(),
    title: title.value,
    authorId: usersStore.currentUserId,
    markdown: content.value,
    html: html.value,
  };
  emit("submit", newPost);
}
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
  <div class="row">
    <div class="col">
      <div contenteditable ref="contentEditable" @input="handleInput" />
    </div>
    <div class="col">
      <div v-html="html" />
    </div>
  </div>

  <div class="d-flex justify-content-end">
    <div class="btn btn-outline-primary" @click="handleClick">Save Post</div>
  </div>
</template>

<style scoped>
pre {
  background-color: darkblue !important;
}
</style>
