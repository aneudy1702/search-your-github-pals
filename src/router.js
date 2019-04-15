import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import LoginRoute from './routes/login';

function Index() {
  return <h2>Home</h2>;
}

function Demo() {
  return (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
        </a>
        </header>
    </div>
  );
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <LoginRoute />
        <Route component={Demo} />
      </div>
    </Router>
  );
}

export default AppRouter;