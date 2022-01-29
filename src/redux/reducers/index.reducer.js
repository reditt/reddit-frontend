import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import modalReducer from "./modal.reducer";
const allReducers = combineReducers({
  userReducer,
  modalReducer,
});

export default allReducers;
