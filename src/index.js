import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import store from "./redux/state";

const render = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={store.addPost.bind(store)}
        changePost={store.changePost.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById("app")
  );
};

render(store.getState());

store.subscribe(render);
