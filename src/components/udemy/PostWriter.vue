<script setup lang="ts">
import { ref, onMounted, watch, watchEffect } from "vue";
import type { TimelinePost } from "@/models/posts";
import { marked } from "marked";
import highlightjs from "highlight.js";
import { debounce } from "lodash";

const props = defineProps<{
  post: TimelinePost;
}>();

const title = ref(props.post.title);
const content = ref(props.post.markdown);
const html = ref("");
const contenteditable = ref<HTMLDivElement>();

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
  if (!contenteditable.value) {
    throw Error("ContentEditable DOM node was not found");
  }
  contenteditable.value.innerText = content.value;
});

function parseHtml(markdown: string) {
  marked.parse(
    content.value,
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
  if (!contenteditable.value) {
    throw Error("ContentEditable DOM node was not found");
  }
  content.value = contenteditable.value?.innerText;
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
      <div contenteditable ref="contenteditable" @input="handleInput" />
    </div>
    <div class="col">
      <div v-html="html" />
    </div>
  </div>
</template>
