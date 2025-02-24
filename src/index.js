import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StoreProvider } from "./contexts/Store";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter as Router} from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <Router>
        <App />
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
