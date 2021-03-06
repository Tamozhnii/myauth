import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { authReducer } from "./Redux/reducers/AuthReducer";

// В проекте есть типизация комбайна + используется applyMiddlware(thunk), что это???
const Reducer = combineReducers(authReducer);

// В проекте создана отдельная прослойка которая експортирует функцию, возвращающую настоенный СТОР
const store = createStore(authReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
