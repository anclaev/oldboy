import s from "./contacts.module.sass";

import Human from "../Human";

let Humans = [
  { id: 1, name: "Andrew Hardman", ava: "andrew", status: "online" },
  { id: 2, name: "Sasha Roys", ava: "sasha", status: "offline" },
  { id: 3, name: "Oleg Jarov", ava: "oleg", status: "online" },
  { id: 4, name: "Anna Albrant", ava: "anna", status: "offline" },
];

let HumansEl = Humans.map((el) => (
  <Human ava={el.ava} name={el.name} id={el.id} status={el.status} />
));

const Contacts = () => <div className={s.contacts}>{HumansEl}</div>;

export default Contacts;
