
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect, HashRouter } from "react-router-dom";

import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";

import AdminLayout from "./layouts/Admin.js";
import AuthLayout from "./layouts/Auth.js";
import StartedPage from "views/examples/StartedPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute" 
import auth from "./api-client/auth-helper"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/home" render={StartedPage}/>
      <Route path="/admin" render={(props) => {
        return auth.isAuthenticated() ? <AdminLayout {...props} /> : <Redirect  to={'/auth/login'} />
      }} />
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Route path="/home" render={StartedPage}/>
      <Redirect from="*" to="/home" />
      
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
