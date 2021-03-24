import { combineReducers } from "redux";

import handleReducer from "./handleReducer";


const rootReducer = combineReducers({
  handle: handleReducer,
});

export default rootReducer;
