import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import store from "./redux/store";

const render = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById("app")
  );
};

render(store.getState());

store.subscribe(render);
