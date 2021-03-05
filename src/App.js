import "./App.scss";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Friends from "./components/Friends";
import Profile from "./components/Profile";

const App = () => (
  <div className="app-wrapper">
    <Header title="Old Boy" />
    <Menu items={["Me", "Messages", "News", "Music"]} />
    <Friends className="friends" humans={["Andrew", "Anna", "Oleg", "Sasha"]} />
    <Profile />
  </div>
);

export default App;
