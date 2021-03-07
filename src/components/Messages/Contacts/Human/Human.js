import s from "./human.module.sass";

import Pic from "../../../Elems/Pic";
import { NavLink } from "react-router-dom";

const Human = (props) => (
  <NavLink
    to={`/messages/${props.id}`}
    activeClassName={s.active}
    className={s.nav}
  >
    <div className={props.active ? `${s.human} ${s.active}` : s.human}>
      <Pic
        status={props.status}
        img={`${props.ava}.png`}
        width="40px"
        height="40px"
      />
      <span className={s.name}>{props.name}</span>
    </div>
  </NavLink>
);

export default Human;
