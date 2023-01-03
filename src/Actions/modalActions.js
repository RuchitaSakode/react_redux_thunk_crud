import { SHOW_MODAL, HIDE_MODAL } from "./actionType";

const showModal = () => {
  return {
    type: SHOW_MODAL,
    // payload: true,
  };
};
const hideModal = () => {
  return {
    type: HIDE_MODAL,
    // payload: false,
  };
};
export default {
  showModal,
  hideModal,
};
