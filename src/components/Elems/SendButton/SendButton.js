import s from "./sendButton.module.sass";

import Icon from "../Icons";

const SendButton = () => (
  <button className={s.send}>
    <Icon className={s.icon} name="Send" />
  </button>
);

export default SendButton;
