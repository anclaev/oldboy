import s from "./pic.module.sass";

const Pic = (props) => {
  let classes = `${props.className !== undefined ? props.className : ""} ${
    s.pic
  } ${props.status === "online" ? s.online : ""}`;
  return (
    <div
      className={classes}
      style={{
        backgroundImage: `url("imgs/${props.img}")`,
        height: props.height,
        width: props.width,
      }}
    ></div>
  );
};

export default Pic;
