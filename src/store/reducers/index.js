import { combineReducers } from "redux";
import dimensionReducer from "./dimensionReducer";

const reducers = combineReducers({
  dimensions: dimensionReducer,
});

export default reducers;