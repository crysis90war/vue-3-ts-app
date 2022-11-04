import { defineComponent, ref, computed } from "vue";
import { createPinia } from "pinia";
import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Navbar from "@/components/navbar/NavBar.vue";
import { createMemoryHistory, createRouter } from "vue-router";
import { routes } from "@/router";

describe("FormInput", () => {
  it("renders", () => {
    const pinia = createPinia();
    const router = createRouter({
      history: createMemoryHistory(),
      routes: routes,
    });
    mount(Navbar, {
      global: {
        plugins: [pinia, router],
      },
    });
  });
});
