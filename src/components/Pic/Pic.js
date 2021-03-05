import s from "./pic.module.sass";

const Pic = (props) => (
  <div
    className={props.status === "online" ? `${s.pic} ${s.online} ` : s.pic}
    style={{
      backgroundImage: `url("imgs/${props.img}")`,
      height: props.height,
      width: props.width,
    }}
  ></div>
);

export default Pic;
