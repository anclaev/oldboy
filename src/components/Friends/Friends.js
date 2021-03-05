import "./friends.sass";

const Random = (max) => Math.floor(Math.random() * Math.floor(max));

const Coin = () => (Random(2) === 0 ? true : false);

const Friends = (props) => (
  <div className={`${props.className} card`}>
    <div className={`${props.className}__title card__title`}>Friends</div>
    <div className={`${props.className}-wrapper`}>
      {props.humans.map((human) => (
        <div
          className={`${props.className}-human ${
            Coin() === true ? "friends-human--online" : ""
          }`}
        >
          <img
            src={`imgs/${human.toLowerCase()}.png`}
            alt={`Human: ${human}`}
            className={`${props.className}-human__ava`}
          />
          <span className={`${props.className}-human__name`}>{human}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Friends;
