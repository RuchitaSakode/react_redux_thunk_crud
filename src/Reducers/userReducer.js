import {
  GET_USER_LIST_FAILURE,
  GET_USER_LIST_START,
  GET_USER_LIST_SUCCESS,
} from "../Actions/actionType";

const initialState = {
  data: [],
  error: "",
  loading: false,
};
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_LIST_START:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_LIST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case GET_USER_LIST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}
