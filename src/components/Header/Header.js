import s from "./header.module.sass";

import Icon from "../Icons";

const Header = (props) => (
  <header className={s.header}>
    <div className={s.logo}>
      <Icon name="Logo" className={s.icon} />
      <span className={s.text}>{props.title}</span>
    </div>
    <Icon name="Settings" color="#A7A7A7" size="20" className={s.settings} />
  </header>
);

export default Header;
