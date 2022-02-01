import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Community from "../pages/Community";
import CreatePost from "../pages/CreatePost";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import Signup from "../pages/Signup";
import ProtectedRoutes from "./ProtectedRoutes";

const Router = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgotpassword" component={ForgotPassword} />
        <Route exact path="/resetpassword/:token" component={ResetPassword} />
        <Route path="/community/:name/:type?" component={Community} />
        <ProtectedRoutes exact path="/" component={Home} />
        <ProtectedRoutes exact path="/createpost" component={CreatePost} />
        <Route exact path="/:anything" component={Signup} />
      </Switch>
    </>
  );
};

export default Router;
