<script setup lang="ts">
interface Props {
  to: string;
  label: string;
  dropdown?: boolean;
}
// eslint-disable-next-line vue/no-setup-props-destructure
const { to, label, dropdown = false } = defineProps<Props>();
</script>

<template>
  <li v-if="dropdown">
    <RouterLink :to="{ name: to }" class="dropdown-item">
      {{ label }}
    </RouterLink>
  </li>

  <li v-else class="nav-item">
    <RouterLink :to="{ name: to }" class="nav-link">
      {{ label }}
    </RouterLink>
  </li>
</template>

<style></style>
