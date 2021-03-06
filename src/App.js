import { Route, BrowserRouter } from "react-router-dom";

import "./App.scss";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Me from "./components/Me";
import Messages from "./components/Messages";

const App = (props) => (
  <BrowserRouter>
    <div className="app-wrapper">
      <Header title="Old Boy" />
      <Sidebar className="sidebar" humans={props.state.humans} />
      <Route
        path="/me"
        render={() => (
          <Me
            posts={props.state.posts.data}
            new={props.state.posts.new}
            dispatch={props.dispatch}
          />
        )}
      />
      <Route
        path="/messages"
        render={() => (
          <Messages
            contacts={props.state.humans}
            messages={props.state.messages.data}
            new={props.state.messages.new}
            dispatch={props.dispatch}
          />
        )}
      />
    </div>
  </BrowserRouter>
);

export default App;
