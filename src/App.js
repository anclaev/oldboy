import { Route, BrowserRouter } from "react-router-dom";

import "./App.scss";

import Header from "./components/Header";
import Menu from "./components/Sidebar/Menu";
import Friends from "./components/Sidebar/Friends";

import Me from "./components/Me";
import Messages from "./components/Messages";

const App = (props) => (
  <BrowserRouter>
    <div className="app-wrapper">
      <Header title="Old Boy" />
      <Menu items={["Me", "Messages", "News", "Music"]} />
      <Friends className="friends" humans={props.state.humans} />

      <Route
        path="/me"
        render={() => <Me posts={props.state.posts} addPost={props.addPost} />}
      />
      <Route
        path="/messages"
        render={() => (
          <Messages
            contacts={props.state.humans}
            messages={props.state.messages}
          />
        )}
      />
    </div>
  </BrowserRouter>
);

export default App;
