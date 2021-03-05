import s from "./menu.module.sass";

import Icon from "../Icons";

const Menu = (props) => (
  <div className={s.menu}>
    <span className={s.title}>Menu</span>
    <div className={s.list}>
      {props.items.map((item) => (
        <div className={s.item}>
          <Icon name={item} className={s.icon} />
          <span className={s.text}>{item}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Menu;
