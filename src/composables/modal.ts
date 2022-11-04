import SinginForm from "@/components/udemy/SinginForm.vue";
import SingupForm from "@/components/udemy/SingupForm.vue";
import { ref, shallowRef } from "vue";

const show = ref<boolean>(false);
const component = shallowRef();
const closeModal = (id: string): void => {
  const myModalEl = document.getElementById(id);
  // eslint-disable-next-line no-undef
  const modal = bootstrap.Modal.getInstance(myModalEl);
  modal.hide();
};

export function useModal() {
  return {
    show,
    component,
    showModal: (type: "singUp" | "singIn") => {
      console.log(SingupForm);
      show.value = true;
      switch (type) {
        case "singIn":
          return (component.value = SinginForm);
        case "singUp":
          return (component.value = SingupForm);
      }
    },
    hideModal: () => (show.value = false),
    closeModal,
  };
}
