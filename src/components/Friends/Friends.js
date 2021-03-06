import s from "./friends.module.sass";

const Random = (max) => Math.floor(Math.random() * Math.floor(max));

const Coin = () => (Random(2) === 0 ? true : false);

const Friends = (props) => (
  <div className={s.friends}>
    <div className={s.title}>Friends</div>
    <div className={s.wrapper}>
      {props.humans.map((human) => (
        <div
          className={`${s.human} ${
            Coin() === true ? `${s.human__online}` : ""
          }`}
        >
          <img
            src={`../imgs/${human.toLowerCase()}.png`}
            alt={`Human: ${human}`}
            className={s.ava}
          />
          <span className={s.name}>{human}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Friends;
