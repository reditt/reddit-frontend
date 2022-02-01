/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Route, Redirect } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import { isAuthenticated } from "../utils/isAuthed.utils";

const ProtectedRoutes = ({ component: Component, ...rest }) => {
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  } else {
    return (
      <Route
        {...rest}
        render={() => (
          <Wrapper>
            <Component />
          </Wrapper>
        )}
      />
    );
  }
};

export default ProtectedRoutes;
