import s from "./contacts.module.sass";

import Human from "./Human";

let Humans = [
  {
    id: 1,
    name: "Andrew",
    surname: "Hardman",
    ava: "andrew",
    status: "online",
  },
  { id: 2, name: "Sasha", surname: "Roys", ava: "sasha", status: "offline" },
  { id: 3, name: "Oleg", surname: "Jarov", ava: "oleg", status: "online" },
  { id: 4, name: "Anna", surname: "Albrant", ava: "anna", status: "offline" },
];

let HumansEl = Humans.map((el) => (
  <Human
    ava={el.ava}
    name={`${el.name} ${el.surname}`}
    id={el.id}
    status={el.status}
  />
));

const Contacts = () => <div className={s.contacts}>{HumansEl}</div>;

export default Contacts;
