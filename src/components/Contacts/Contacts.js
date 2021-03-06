import s from "./contacts.module.sass";

import Human from "../Human";

const Humans = [
  { id: 1, name: "Andrew Hardman", ava: "andrew", status: "online" },
  { id: 2, name: "Sasha Roys", ava: "sasha", status: "offline" },
  { id: 3, name: "Oleg Jarov", ava: "oleg", status: "online" },
  { id: 4, name: "Anna Albrant", ava: "anna", status: "offline" },
];

const Contacts = () => (
  <div className={s.contacts}>
    <Human ava="andrew" name="Andrew Hardmann" id="1" status="online" />
    <Human ava="sasha" name="Sasha Roys" id="2" />
    <Human ava="oleg" name="Oleg Jarov" id="3" status="online" />
    <Human ava="anna" name="Anna Albrant" id="4" />
  </div>
);

export default Contacts;
