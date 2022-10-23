<script setup lang="ts">
import TimelineTab from "../components/udemy/TimelineTab.vue";
</script>
<template>
  <div class="row">
    <div class="col">
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
              Loading...
            </button>
          </div>
        </template>
      </Suspense>
    </div>
    <div class="col"></div>
  </div>
</template>
<style></style>
