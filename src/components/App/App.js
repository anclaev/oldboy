import "./App.scss";

import Header from "../Header";
import Menu from "../Menu";
import Friends from "../Friends";
import Content from "../Content";

const App = () => (
  <div className="app-wrapper">
    <Header title="Old Boy" />
    <Menu items={["Me", "Messages", "News", "Music"]} />
    <Friends className="friends" humans={["Andrew", "Anna", "Oleg", "Sasha"]} />
    <Content />
  </div>
);

export default App;
