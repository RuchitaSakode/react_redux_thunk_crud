import { SHOW_MODAL, HIDE_MODAL } from "../Actions/actionType";

const initialState = { isModalShow: false };

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        isModalShow: true,
      };
    case HIDE_MODAL:
      return {
        ...state,
        isModalShow: false,
      };
    default:
      return state;
  }
};
export default modalReducer;
