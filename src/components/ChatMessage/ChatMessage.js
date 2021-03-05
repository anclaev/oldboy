import s from "./chatMessage.module.sass";

const ChatMessage = (props) => (
  <div
    className={
      props.pos === "r" ? `${s.wrapper} ${s.wr}` : `${s.wrapper} ${s.wl}`
    }
  >
    <div className={props.pos === "r" ? `${s.msg} ${s.r}` : `${s.msg} ${s.l}`}>
      <div className={s.text}>{props.text}</div>
      <div className={s.time}>{props.time}</div>
    </div>
  </div>
);

export default ChatMessage;
