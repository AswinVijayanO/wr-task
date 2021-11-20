import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
export const PrivateRoute = ({ children, ...rest }) => {
    const isLogged = useSelector((state) => state.isLogged);
    return (
      <Route
        {...rest}
        render={({ location }) =>
        isLogged ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  };