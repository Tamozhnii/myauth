import React from "react";
import Home from "./components/Home/HomeContainer";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Auth from "./components/Auth/AuthContainer";

// данный роутинг не позволяет автоматически войти в приложения, после входа,
//не разобрался как сделать условное обновление страницы или перерендер APP?
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
