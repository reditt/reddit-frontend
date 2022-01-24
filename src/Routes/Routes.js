import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoutes from "./ProtectedRoutes";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <div>
          <Header />
          {/* <Wrapper> */}
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          {/* </Wrapper> */}
        </div>
        <ProtectedRoutes exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
