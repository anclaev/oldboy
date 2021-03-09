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
      <Friends className="friends" humans={props.data.humans} />

      <Route path="/me" render={() => <Me posts={props.data.posts} />} />
      <Route
        path="/messages"
        render={() => (
          <Messages
            contacts={props.data.humans}
            messages={props.data.messages}
          />
        )}
      />
    </div>
  </BrowserRouter>
);

export default App;
