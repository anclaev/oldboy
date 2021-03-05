import "./pic.sass";

const Pic = (props) => (
  <div
    className={`${props.className} pic`}
    style={{
      backgroundImage: `url("imgs/${props.img}")`,
      height: props.height,
      width: props.width,
    }}
  ></div>
);

export default Pic;
