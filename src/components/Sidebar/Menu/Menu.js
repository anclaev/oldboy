import s from "./menu.module.sass";

import Icon from "../../Elems/Icons";
import { NavLink } from "react-router-dom";

const Menu = (props) => (
  <div className={s.menu}>
    <span className={s.title}>Menu</span>
    <div className={s.list}>
      {props.items.map((item) => (
        <div className={s.item}>
          <Icon name={item} className={s.icon} />
          <NavLink
            to={`/${item.toLowerCase()}`}
            className={s.text}
            activeClassName={s.active}
          >
            {item}
          </NavLink>
        </div>
      ))}
    </div>
  </div>
);

export default Menu;
