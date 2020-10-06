import React from "react";
import Home from "./components/Home/Home";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Auth from "./components/Auth/AuthContainer";

function App() {
  return (
    <HashRouter>
      <Route
        path="/"
        component={localStorage.getItem("authValid") === "1" ? Home : Auth}
      />
    </HashRouter>
  );
}

export default App;
