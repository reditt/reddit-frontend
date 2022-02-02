import { setUser } from "../redux/actions/setUser.action";

// * UTIL TO LOGOUT USER
export const userLogout = (Dispatch) => {
  localStorage.clear();
  Dispatch(setUser(null));
};
