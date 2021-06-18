import React from "react";
import HomeScreen from "./screens/HomeScreen";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
