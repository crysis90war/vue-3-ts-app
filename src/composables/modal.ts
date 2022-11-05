import SinginForm from "@/components/udemy/SinginForm.vue";
import SingupForm from "@/components/udemy/SingupForm.vue";
import * as bootstrap from "bootstrap";
import { ref, shallowRef } from "vue";

const show = ref<boolean>(false);
const component = shallowRef();
const closeModal = (id: string): void => {
  const myModalEl = document.getElementById(id);
  if (!myModalEl) {
    throw Error("modal couldn't be found");
  }
  // eslint-disable-next-line no-undef
  const modal = bootstrap.Modal.getInstance(myModalEl);
  if (!modal) {
    throw Error("modal couldn't be found.");
  }
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
