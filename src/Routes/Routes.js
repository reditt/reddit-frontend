import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Home from "../pages/Home";
import ProtectedRoutes from "./ProtectedRoutes";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoutes exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
