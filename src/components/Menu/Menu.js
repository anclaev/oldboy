import "./menu.sass";

import Icon from "../Icons";

const Menu = (props) => (
  <div className={`${props.className} card`}>
    <span className={`${props.className}__title card__title`}>Menu</span>
    <div className={`${props.className}-list`}>
      {props.items.map((item) => (
        <div className={`${props.className}-list-item`}>
          <Icon name={item} className={`${props.className}-list-item__icon`} />
          <span className={`${props.className}-list-item__text`}>{item}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Menu;
