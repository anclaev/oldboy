import s from "./chat.module.sass";

import ChatMessage from "./ChatMessage";
import Textbox from "../../Elems/Textbox";
import SendButton from "../../Elems/SendButton";

const Chat = (props) => {
  let msgs = props.msgs.map((el) => (
    <ChatMessage text={el.text} time={el.time} pos={el.pos} />
  ));

  return (
    <div className={s.chat}>
      <div className={s.wrapper}>
        <div className={s.messages}>{msgs}</div>
      </div>
      <div className={s.new}>
        <Textbox placeholder="Send Sasha a new message..." />
        <SendButton />
      </div>
    </div>
  );
};

export default Chat;
