import counterReducer from "./counterReducer";
import dummyAuthReducer from "./dummyAuthReducer";
import { combineReducers } from "redux";

// combines all reducers into one reducer that returns state (and then renders)
const allReducers = combineReducers({
  counter: counterReducer,
  auth: dummyAuthReducer,
});

export default allReducers;