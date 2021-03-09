import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { AddPost } from "./redux/state";

const render = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={AddPost} />
    </React.StrictMode>,
    document.getElementById("app")
  );
};

export default render;
