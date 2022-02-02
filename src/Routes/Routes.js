import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Community from "../pages/Community";
import CreatePost from "../pages/CreatePost";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import Signup from "../pages/Signup";
import { setUser } from "../redux/actions/setUser.action";
import ProtectedRoutes from "./ProtectedRoutes";
import User from "../api/user.api";

const userApi = new User();
const Router = () => {
  const Dispatch = useDispatch();

  // * LOCAL STATE
  const [loading, setLoading] = useState(true);

  // * USEEFFECT FOR SETTING USERDATA GLOBALLY
  useEffect(() => {
    setLoading(true);
    (async function () {
      try {
        const userData = await userApi.getUserDetails();
        if (userData && userData?.data?.data?.id) {
          Dispatch(setUser(userData?.data?.data));
          localStorage.setItem("user", userData?.data?.data);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, [Dispatch]);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgotpassword" component={ForgotPassword} />
        <Route exact path="/resetpassword/:token" component={ResetPassword} />
        <ProtectedRoutes exact path="/" component={Home} />
        <ProtectedRoutes exact path="/createpost" component={CreatePost} />
        <ProtectedRoutes
          exact
          path="/community/:name/:type?"
          component={Community}
        />
      </Switch>
    </>
  );
};

export default Router;
