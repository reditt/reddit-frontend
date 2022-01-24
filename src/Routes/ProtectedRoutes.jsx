/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");

const isAuthenticated = false;
// if (user && token) isAuthenticated = true;

const ProtectedRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      children={(props) =>
        isAuthenticated ? (
          <>
            {
              <div>
                <Header />
                <Wrapper>
                  <Component {...rest} {...props} />
                </Wrapper>
              </div>
            }
          </>
        ) : (
          <>
            <Redirect to="/signup" />
          </>
        )
      }
    />
  );
};

export default ProtectedRoutes;
