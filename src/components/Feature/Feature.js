import "./feature.sass";

import Icon from "../Icons";

const Feature = (props) =>
  props.data.map((item) => {
    return (
      <div className={`${props.className} feature`}>
        <span className={`${props.className}__text feature__text`}>
          {item[1]}
        </span>
        <Icon
          className={`${props.className}__icon feature__icon`}
          name={`${item[0]}`}
        />
      </div>
    );
  });

export default Feature;
