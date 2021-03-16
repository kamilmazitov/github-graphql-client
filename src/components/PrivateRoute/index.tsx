import React from "react";
import { Route, Redirect, RouteProps} from "react-router-dom";

export interface PrivateRouteProps extends RouteProps  {
    component: any;
    isUserLoggedIn: boolean;
  }
  
export const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, isUserLoggedIn, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(props) => {
        return isUserLoggedIn ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
};