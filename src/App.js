import { Route, BrowserRouter } from "react-router-dom";

import "./App.scss";

import Header from "./components/Header";
import Menu from "./components/Sidebar/Menu";
import Friends from "./components/Sidebar/Friends";

import Me from "./components/Me";
import Messages from "./components/Messages";

const Random = (max) => Math.floor(Math.random() * Math.floor(max));

const Coin = () => (Random(2) === 0 ? true : false);

let Humans = [
  {
    id: 1,
    name: "Andrew",
    surname: "Hardman",
    ava: "andrew",
    status: `${Coin() === true ? `online` : "offline"}`,
  },
  {
    id: 2,
    name: "Sasha",
    surname: "Roys",
    ava: "sasha",
    status: `${Coin() === true ? `online` : "offline"}`,
  },
  {
    id: 3,
    name: "Oleg",
    surname: "Jarov",
    ava: "oleg",
    status: `${Coin() === true ? `online` : "offline"}`,
  },
  {
    id: 4,
    name: "Anna",
    surname: "Albrant",
    ava: "anna",
    status: `${Coin() === true ? `online` : "offline"}`,
  },
];

const App = () => (
  <BrowserRouter>
    <div className="app-wrapper">
      <Header title="Old Boy" />
      <Menu items={["Me", "Messages", "News", "Music"]} />
      <Friends className="friends" humans={Humans} />

      <Route component={Me} path="/me" />
      <Route component={Messages} path="/messages" />
    </div>
  </BrowserRouter>
);

export default App;
