import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import state from "./redux/state";
import { AddPost } from "./redux/state";

ReactDOM.render(
  <React.StrictMode>
    <App state={state} addPost={AddPost} />
  </React.StrictMode>,
  document.getElementById("app")
);
