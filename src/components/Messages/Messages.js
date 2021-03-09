import s from "./messages.module.scss";

import Contacts from "./Contacts";
import Chat from "./Chat";

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

const Messages = () => (
  <div className={s.messages}>
    <span className={s.title}>Your messages</span>
    <Contacts />
    <Chat msgs={messages} />
  </div>
);

export default Messages;
