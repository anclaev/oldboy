import s from "./contacts.module.sass";

import Human from "../Human";

const Contacts = () => (
  <div className={s.contacts}>
    <Human ava="andrew" name="Andrew Hardmann" status="online" />
    <Human ava="sasha" name="Sasha Roys" />
    <Human ava="oleg" name="Oleg Jarov" status="online" />
    <Human ava="anna" name="Anna Albrant" />
  </div>
);

export default Contacts;
