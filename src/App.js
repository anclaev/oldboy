import { Route, BrowserRouter } from "react-router-dom";

import "./App.scss";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Friends from "./components/Friends";

import Me from "./components/Me";
import Messages from "./components/Messages";

const App = () => (
  <BrowserRouter>
    <div className="app-wrapper">
      <Header title="Old Boy" />
      <Menu items={["Me", "Messages", "News", "Music"]} />
      <Friends
        className="friends"
        humans={["Andrew", "Anna", "Oleg", "Sasha"]}
      />

      <Route component={Me} path="/me" />
      <Route component={Messages} path="/messages" />
    </div>
  </BrowserRouter>
);

export default App;
