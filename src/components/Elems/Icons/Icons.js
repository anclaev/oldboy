import React from "react";
import IconsSVG from "./icons.svg";

const Icons = (props) => (
  <svg
    className={`${props.className}`}
    fill={props.color}
    stroke={props.color}
    width={props.size}
    height={props.size}
  >
    <use xlinkHref={`${IconsSVG}#${props.name}`} />
  </svg>
);

export default Icons;
