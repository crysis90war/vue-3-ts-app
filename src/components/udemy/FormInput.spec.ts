import { defineComponent, ref, computed } from "vue";
import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import FormInput from "@/components/udemy/FormInput.vue";

describe("FormInput", () => {
  it("tests validation", async () => {
    const Parent = defineComponent({
      components: { FormInput },
      template: `
        <FormInput
            id="test"
            name="foo"
            type="input"
            :status="status"
            v-model="formValue"
        />
      `,
      setup() {
        const formValue = ref("foo");
        const status = computed(() => {
          if (formValue.value.length > 5) {
            return {
              valid: true,
            };
          } else {
            return {
              valid: false,
              message: "error",
            };
          }
        });
        return {
          formValue,
          status,
        };
      },
    });

    const wrapper = mount(Parent);
    expect(wrapper.find(".invalid-feedback").text()).toBe("error");
    await wrapper.find("input").setValue("foobar");
    expect(wrapper.find(".is-invalid").exists()).toBe(false);
  });

  it("rendes some errors", () => {
    const wrapper = mount(FormInput, {
      props: {
        id: "id",
        name: "foo",
        modelValue: "bar",
        status: {
          valid: false,
          message: "error",
        },
        type: "input",
      },
    });

    expect(wrapper.find(".is-invalid").exists()).toBe(true);
  });

  it("rendes no errors", () => {
    const wrapper = mount(FormInput, {
      props: {
        id: "id",
        name: "foo",
        modelValue: "bar",
        status: {
          valid: true,
          message: "error",
        },
        type: "input",
      },
    });

    expect(wrapper.find(".is-invalid").exists()).toBe(false);
    expect(wrapper.find(".is-valid").exists()).toBe(true);
  });
});
