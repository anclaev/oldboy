import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import store from "./redux/redux-store";

const render = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById("app")
  );
};

render(store);

store.subscribe(() => {
  render(store);
});
