<script setup lang="ts">
import { ref, computed } from "vue";
import { validate, required, length } from "@/validation";
import type { NewUser } from "@/models/users";
import FormInput from "./FormInput.vue";

defineProps<{
  id: string;
  title: string;
  error?: string;
}>();

const emit = defineEmits<{
  (event: "submit", payload: NewUser): void;
}>();

const username = ref<string>("");
const usernameStatus = computed(() => {
  return validate(username.value, [required, length({ min: 5, max: 10 })]);
});
const password = ref<string>("");
const passwordStatus = computed(() => {
  return validate(password.value, [required, length({ min: 10, max: 40 })]);
});

const isInvalid = computed(() => {
  return !usernameStatus.value.valid || !passwordStatus.value.valid;
});

function handleSubmit(): void {
  if (isInvalid.value) {
    return;
  }

  const newUser: NewUser = {
    username: username.value,
    password: password.value,
  };

  try {
    emit("submit", newUser);
  } catch (e) {
    throw Error("Something went wrong in submit user form...");
  }
}
</script>

<template>
  <!-- Modal -->
  <div
    class="modal fade"
    :id="id"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ title }}</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="handleSubmit">
            <FormInput
              type="text"
              :id="id"
              name="Username"
              v-model="username"
              :status="usernameStatus"
            />
            <FormInput
              type="password"
              :id="id"
              name="Password"
              v-model="password"
              :status="passwordStatus"
            />

            <span class="text-danger">
              {{ error }}
            </span>

            <div class="d-flex justify-content-end">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button class="btn btn-primary" :disabled="isInvalid">
                {{ title }}
              </button>
            </div>
          </form>
        </div>
        <!-- <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
        </div> -->
      </div>
    </div>
  </div>
</template>
