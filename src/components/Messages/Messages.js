import s from "./messages.module.scss";

import Contacts from "./Contacts";
import Chat from "./Chat";

const Messages = (props) => (
  <div className={s.messages}>
    <span className={s.title}>Your messages</span>
    <Contacts humans={props.contacts} />
    <Chat
      messages={props.messages}
      newMessage={props.newMessage}
      dispatch={props.dispatch}
    />
  </div>
);

export default Messages;
