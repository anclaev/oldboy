import s from "./sidebar.module.sass";

import Friends from "./Friends";
import Menu from "./Menu";

const Sidebar = (props) => (
  <div className={s.sidebar}>
    <Menu items={["Me", "Messages", "News", "Music"]} name={s.item} />
    <Friends humans={props.humans} name={s.item} />
  </div>
);

export default Sidebar;
