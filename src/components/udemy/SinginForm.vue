<script setup lang="ts">
import { ref } from "vue";
import type { NewUser } from "@/models/users";
import { useUsers } from "@/stores/users";
import { useModal } from "@/composables/modal";
import UserForm from "./UserForm.vue";
import { useConstants } from "@/constants";

const constants = useConstants();
const usersStore = useUsers();
const modal = useModal();
const error = ref("");

async function handleSingin(newUser: NewUser): Promise<void> {
  // 1. request
  const body = JSON.stringify(newUser);
  const res = await window.fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
  // 2. success -> authenticate(), hideModal
  // 3. fail -> 401, 404 -> error
  if (
    [
      constants.STATUS_CODE.UNAUTHORIZED,
      constants.STATUS_CODE.FORBIDDEN,
      constants.STATUS_CODE.NOT_FOUND,
    ].includes(res.status)
  ) {
    error.value = "Username or password was incorrect.";
  } else {
    usersStore.authenticate();
    modal.closeModal("singin");
  }
}
</script>
<template>
  <!-- Modal -->
  <UserForm id="singin" title="Sing In" :error="error" @submit="handleSingin" />
</template>
