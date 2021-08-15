import { createStore } from "redux";
import countReducer from "./reducers/counterReducer";

const store = createStore(countReducer, {});

export default store;