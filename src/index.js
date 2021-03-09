import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import state from "./redux/state";

ReactDOM.render(
  <React.StrictMode>
    <App data={state} />
  </React.StrictMode>,
  document.getElementById("app")
);
