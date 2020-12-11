import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Router,
  userHisory,
  Switch,
} from "react-router-dom";

import "antd/dist/antd.css";

import App from "./components/App";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </Router>,
  document.getElementById("root")
);
