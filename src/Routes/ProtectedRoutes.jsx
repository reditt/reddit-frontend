/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Route } from "react-router-dom";

const isAuthenticated = true;

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
          <div>not authed</div>
        )
      }
    />
  );
};

export default ProtectedRoutes;
