import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import state from "./redux/state";
import { AddPost, ChangePost, Subscribe } from "./redux/state";

const render = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={AddPost} changePost={ChangePost} />
    </React.StrictMode>,
    document.getElementById("app")
  );
};

render(state);

Subscribe(render);
