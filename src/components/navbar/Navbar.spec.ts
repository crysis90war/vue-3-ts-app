import { createPinia, setActivePinia, type Pinia } from "pinia";
import { mount } from "@vue/test-utils";
import { describe, it, expect, beforeEach } from "vitest";
import Navbar from "@/components/navbar/NavBar.vue";
import { createMemoryHistory, createRouter, type Router } from "vue-router";
import { routes } from "@/router";
import { useUsers } from "@/stores/users";

describe("FormInput", () => {
  let pinia: Pinia;
  let router: Router;
  beforeEach(() => {
    // const el = document.createElement("div");
    // el.id = "modal";
    // document.body.appendChild(el);

    pinia = createPinia();
    setActivePinia(pinia);
    router = createRouter({
      history: createMemoryHistory(),
      routes: routes,
    });
  });
  it("renders signin and singup when not authenticated", () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [pinia, router],
      },
    });
    console.log(wrapper.html());

    expect(wrapper.find("#sing-up").exists()).toBe(false);
    expect(wrapper.find('[data-testid="sing-in"]').exists()).toBe(false);
  });
  it("renders newpost and logout when authenticated", () => {
    const users = useUsers();
    users.currentUserId = "1";

    const wrapper = mount(Navbar, {
      global: {
        plugins: [pinia, router],
      },
    });
    expect(wrapper.find("#new-post").text()).toBe("New Post");
    expect(wrapper.find("#sign-out").text()).toBe("Sign Out");
  });
});
