import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect as DefaultRoute,
} from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Wrapper from "../components/Wrapper";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import Signup from "../pages/Signup";
import ProtectedRoutes from "./ProtectedRoutes";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <div>
          <Header />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <Route exact path="/resetpassword/:token" component={ResetPassword} />
        </div>
        <ProtectedRoutes exact path="/" component={Home} />
        <Route exact path="/:anything" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
