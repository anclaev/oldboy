import s from "./friends.module.sass";

import Pic from "../../Elems/Pic";

const Random = (max) => Math.floor(Math.random() * Math.floor(max));

const Coin = () => (Random(2) === 0 ? true : false);

const Friends = (props) => (
  <div className={s.friends}>
    <div className={s.title}>Friends</div>
    <div className={s.wrapper}>
      {props.humans.map((human) => (
        <div className={s.human}>
          <Pic
            img={`${human.toLowerCase()}.png`}
            className={s.ava}
            status={`${Coin() === true ? `online` : ""}`}
          />
          <span className={s.name}>{human}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Friends;
