<script setup lang="ts">
import { ref, computed } from "vue";
import FormInput from "./FormInput.vue";
import { validate, required, length } from "@/validation";
import type { NewUser } from "@/models/users";
import { useUsers } from "@/stores/users";

const username = ref<string>("");
const usernameStatus = computed(() => {
  return validate(username.value, [required, length({ min: 5, max: 10 })]);
});
const password = ref<string>("");
const passwordStatus = computed(() => {
  return validate(password.value, [required, length({ min: 10, max: 40 })]);
});

const usersStore = useUsers();

const isInvalid = computed(() => {
  return !usernameStatus.value.valid || !passwordStatus.value.valid;
});

async function handleSubmit() {
  if (isInvalid.value) {
    return;
  }
  const newUser: NewUser = {
    username: username.value,
    password: password.value,
  };

  try {
    await usersStore.createUser(newUser);
  } catch (error) {
    console.log(error);
  }
}
</script>
<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="modal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Sing up</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form action="" @submit.prevent="handleSubmit">
            <FormInput
              type="text"
              name="Username"
              v-model="username"
              :status="usernameStatus"
            />
            <FormInput
              type="password"
              name="Password"
              v-model="password"
              :status="passwordStatus"
            />

            <div class="d-flex justify-content-end">
              <button class="btn btn-primary" :disabled="isInvalid">Submit</button>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
