import React from "react";
import s from "./chat.module.sass";

import ChatMessage from "./ChatMessage";
import Textbox from "../../Elems/Textbox";
import SendButton from "../../Elems/SendButton";

import {
  updateMessageCreator,
  addMessageCreator,
} from "../../../redux/reducers";

const Chat = (props) => {
  let messages = props.messages.map((el, key) => (
    <ChatMessage text={el.text} time={el.time} pos={el.pos} key={key} />
  ));

  const newMessage = React.createRef();

  const addMessage = () => {
    if (props.newMessage.replace(/\s+/g, " ").trim() !== "") {
      props.dispatch(addMessageCreator());
    }

    const scroll = document.getElementById("scroll");

    let int = setInterval(() => {
      if (scroll !== null) {
        scroll.scrollTop = scroll.scrollHeight;
      }
      clearInterval(int);
    }, 0);
  };

  const changeMessage = (e) => {
    let text = newMessage.current.value;
    props.dispatch(updateMessageCreator(text));
  };

  return (
    <div className={s.chat}>
      <div className={s.wrapper} id="scroll">
        <div className={s.messages}>{messages}</div>
      </div>
      <div className={s.new}>
        <Textbox
          placeholder="Send Sasha a new message..."
          refVal={newMessage}
          defVal={props.newMessage}
          change={changeMessage}
        />
        <SendButton click={addMessage} />
      </div>
    </div>
  );
};

export default Chat;
