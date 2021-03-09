import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const Random = (max) => Math.floor(Math.random() * Math.floor(max));
const Coin = () => (Random(2) === 0 ? true : false);

let humans = [
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

let posts = [
  { id: 1, text: "How stupid that is.", time: "March 4, 19:35" },
  { id: 2, text: "Hey, what are you doing?", time: "March 4, 19:37" },
];

let messages = [
  { text: "Hi, whats up?", time: "20:35", pos: "l", humanID: "1" },

  {
    text: "Not bad. Got a job. How are you?",
    time: "20:37",
    pos: "r",
    humanID: "1",
  },

  {
    text: "Very good! I'm getting married soon! You're invited!",
    time: "20:40",
    pos: "l",
    humanID: "1",
  },

  {
    text: "Wow, cool! When will the wedding be?",
    time: "20:45",
    pos: "r",
    humanID: "1",
  },

  {
    text: "March 17, 12:00, Yekaterinburg. The dress code is a white tie.",
    time: "21:00",
    pos: "l",
    humanID: "1",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App humans={humans} posts={posts} messages={messages} />
  </React.StrictMode>,
  document.getElementById("app")
);
