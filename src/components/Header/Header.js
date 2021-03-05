import "./header.sass";

import Icon from "../Icons";

const Header = (props) => (
  <header className="header">
    <div className="header-logo">
      <Icon name="Logo" className="header-logo__icon" />
      <span className="header-logo__text">{props.title}</span>
    </div>
    <Icon
      name="Settings"
      color="#A7A7A7"
      size="20"
      className="header__settings"
    />
  </header>
);

export default Header;
