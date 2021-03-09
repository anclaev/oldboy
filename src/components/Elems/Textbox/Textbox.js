import s from "./textbox.module.sass";

const Textbox = (props) => (
  <input
    className={s.text}
    type="text"
    placeholder={props.placeholder}
    ref={props.refVal}
    value={props.defVal}
    onChange={props.change}
  />
);

export default Textbox;
