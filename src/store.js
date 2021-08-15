import { createStore } from "redux";
import countReducer from "./reducers/counterReducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(countReducer, applyMiddleware(thunk));

export default store;