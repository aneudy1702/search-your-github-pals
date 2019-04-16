import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';

function Index() {
  return <h2>Home</h2>;
}

function AppRoute() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Index} />
      </div>
    </Router>
  );
}

export default AppRoute;