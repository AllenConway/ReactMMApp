import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import fetchCabinReducer from "./reducers/fetchCabinDetailsReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

//Create the Redux store using the redux-devtools-extension which will allow us to inspect the state
export const store = createStore(fetchCabinReducer, composeWithDevTools());

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
