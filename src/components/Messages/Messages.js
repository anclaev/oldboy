import s from "./messages.module.scss";

import Contacts from "./Contacts";
import Chat from "./Chat";

const Messages = (props) => (
  <div className={s.messages}>
    <span className={s.title}>Your messages</span>
    <Contacts humans={props.contacts} />
    <Chat msgs={props.messages} />
  </div>
);

export default Messages;
