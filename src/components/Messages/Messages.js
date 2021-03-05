import s from "./messages.module.sass";

import Chat from "../Chat";

const Messages = () => (
  <div className={s.messages}>
    <span className={s.title}>Your messages</span>
    <Chat />
  </div>
);

export default Messages;
