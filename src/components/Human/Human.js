import s from "./human.module.sass";

import Pic from "../Pic";

const Human = (props) => (
  <div className={props.active ? `${s.human} ${s.active}` : s.human}>
    <Pic
      status={props.status}
      img={`${props.ava}.png`}
      width="40px"
      height="40px"
    />
    <span className={s.name}>{props.name}</span>
  </div>
);

export default Human;
