<script setup lang="ts">
import { useModal } from "@/composables/modal";
import type { NewUser } from "@/models/users";
import { useUsers } from "@/stores/users";
import UserForm from "./UserForm.vue";

const usersStore = useUsers();
const modal = useModal();

async function handleSingUp(newUser: NewUser): Promise<void> {
  await usersStore.createUser(newUser);
  modal.closeModal("singup");
}
</script>
<template>
  <!-- Modal -->
  <UserForm id="singup" title="Sing Up" @submit="handleSingUp" />
</template>
<style scoped></style>
