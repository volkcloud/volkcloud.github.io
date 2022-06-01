import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import SVBHome from "./components/SVBHome";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|svb-home)">
          <SVBHome/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;