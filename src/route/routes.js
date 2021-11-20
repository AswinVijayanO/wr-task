import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import React from "react";
import Login from "../pages/login";
import { useSelector } from "react-redux";
import { PrivateRoute } from "./route-wrappers";
import Home from "../pages/home";
const Routes = () => {
  const isLogged = useSelector((state) => state.isLogged);
  return (
    <Router>
      <Switch>
   
        <PrivateRoute path="/home">
          <Home />
        </PrivateRoute>
        
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};
export default Routes;
