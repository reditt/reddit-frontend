/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Wrapper from "../components/Wrapper";

const ProtectedRoutes = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.userReducer.userData);

  if (!user?.id) {
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
