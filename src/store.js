import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./Reducers/rootReducer";
import thunk from "redux-thunk";
const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export default store;
