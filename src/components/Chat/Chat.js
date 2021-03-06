import s from "./chat.module.sass";

import ChatMessage from "../ChatMessage";
import Textbox from "../Textbox";
import SendButton from "../SendButton";

const Messages = [
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

const Chat = () => (
  <div className={s.chat}>
    <div className={s.wrapper}>
      <div className={s.messages}>
        <ChatMessage text="Hi, whats up?" time="20:35" pos="l" />
        <ChatMessage
          text="Not bad. Got a job. How are you?"
          time="20:37"
          pos="r"
        />
        <ChatMessage
          text="Very good! I'm getting married soon! You're invited!"
          time="20:40"
          pos="l"
        />
        <ChatMessage
          text="Wow, cool! When will the wedding be?"
          time="20:45"
          pos="r"
        />
        <ChatMessage
          text="March 17, 12:00, Yekaterinburg. The dress code is a white tie."
          time="21:00"
          pos="l"
        />
      </div>
    </div>
    <div className={s.new}>
      <Textbox placeholder="Send Sasha a new message..." />
      <SendButton />
    </div>
  </div>
);

export default Chat;
