<script setup lang="ts">
import TimelineTab from "@/components/udemy/TimelineTab.vue";
</script>
<template>
  <Suspense>
    <template #default>
      <TimelineTab />
    </template>

    <template #fallback>
      <div class="d-flex justify-content-center">
        <button class="btn btn-primary" type="button" disabled>
          <span
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Loading... Please wait.
        </button>
      </div>
    </template>
  </Suspense>
</template>
<style></style>
