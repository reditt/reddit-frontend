import { combineReducers } from "redux";
import userReducer from "./user.reducer";
const allReducers = combineReducers({
  userReducer,
});

export default allReducers;
