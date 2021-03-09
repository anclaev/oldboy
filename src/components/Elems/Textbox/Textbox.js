import s from "./textbox.module.sass";

const Textbox = (props) => (
  <input
    className={s.text}
    type="text"
    placeholder={props.placeholder}
    ref={props.refVal}
  />
);

export default Textbox;
