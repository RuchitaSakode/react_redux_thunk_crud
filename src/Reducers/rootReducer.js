import { combineReducers } from "redux";
import userReducer from "./userReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
  userList: userReducer,
  modalStatus: modalReducer,
});
export default rootReducer;
