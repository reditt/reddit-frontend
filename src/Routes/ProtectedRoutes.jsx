/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Route, Redirect } from "react-router-dom";

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");

const isAuthenticated = false;
if (user && token) isAuthenticated = true;

const ProtectedRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      children={(props) =>
        isAuthenticated ? (
          <>
            {
              // Add header here}
              <Component {...rest} {...props} />
              //add footer here
            }
          </>
        ) : (
          // <Redirect to="/" />
          <div>not authed</div>
        )
      }
    />
  );
};

export default ProtectedRoutes;
