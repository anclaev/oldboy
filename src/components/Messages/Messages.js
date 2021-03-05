import s from "./messages.module.scss";

import Contacts from "../Contacts";
import Chat from "../Chat";

const Messages = () => (
  <div className={s.messages}>
    <span className={s.title}>Your messages</span>
    <Contacts />
    <Chat />
  </div>
);

export default Messages;
