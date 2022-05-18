import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
  <BrowserRouter>
  <Router>
    <App />
  </Router>
  </BrowserRouter>,
  document.getElementById("root")
);
