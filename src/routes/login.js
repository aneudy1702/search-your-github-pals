import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
    getRedirectToGithubURL,
} from '../services/login';

function Login() {
  return (<div>
      <h2>Login</h2>
      <a onClick={getRedirectToGithubURL()}>Redirect to Git</a>
  </div>);
}

function LoginRoute() {
  return (
    <Route path="/login" exact component={Login} />
  );
}

export default LoginRoute;