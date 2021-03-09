import s from "./sendButton.module.sass";

import Icon from "../Icons";

const SendButton = (props) => (
  <button className={s.send} onClick={props.click}>
    <Icon className={s.icon} name="Send" />
  </button>
);

export default SendButton;
