import s from "./contacts.module.sass";

import Human from "./Human";

const Contacts = (props) => {
  let Humans = props.humans.map((el) => (
    <Human
      ava={el.ava}
      name={`${el.name} ${el.surname}`}
      id={el.id}
      status={el.status}
    />
  ));
  return <div className={s.contacts}>{Humans}</div>;
};

export default Contacts;
