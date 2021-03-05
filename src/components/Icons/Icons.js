import React from "react";
import IconsSVG from "./icons.svg";

const Icons = ({ name, color, size, className }) => (
  <svg
    className={`${className}`}
    fill={color}
    stroke={color}
    width={size}
    height={size}
  >
    <use xlinkHref={`${IconsSVG}#${name}`} />
  </svg>
);

export default Icons;
