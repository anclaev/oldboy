import s from "./feature.module.sass";

import Icon from "../Icons";

const Feature = (props) =>
  props.data.map((item) => {
    return (
      <div className={`${props.className} ${s.feature}`}>
        <span className={s.text}>{item[1]}</span>
        <Icon className={s.icon} name={`${item[0]}`} />
      </div>
    );
  });

export default Feature;
