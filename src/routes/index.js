import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../views/Home";

export default function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}
