import s from "./friends.module.sass";

import Pic from "../../Elems/Pic";

const Friends = (props) => (
  <div className={`${props.name} ${s.friends}`}>
    <div className={s.title}>Friends</div>
    <div className={s.wrapper}>
      {props.humans.map((human) => (
        <div className={s.human}>
          <Pic
            img={`${human.name.toLowerCase()}.png`}
            className={s.ava}
            status={human.status}
          />
          <span className={s.name}>{human.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Friends;
