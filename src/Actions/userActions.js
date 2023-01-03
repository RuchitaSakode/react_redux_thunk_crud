import {
  GET_USER_LIST_START,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAILURE,
} from "./actionType";

const getUserListStart = () => {
  return {
    type: GET_USER_LIST_START,
  };
};

const getUserListSuccess = (data) => {
  return {
    type: GET_USER_LIST_SUCCESS,
    payload: { data },
  };
};
const getUserListFailure = (error) => {
  return {
    type: GET_USER_LIST_FAILURE,
    payload: { error },
  };
};
export default { getUserListStart, getUserListSuccess, getUserListFailure };
