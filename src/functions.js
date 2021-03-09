const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const currentTime = () => {
  let date = new Date();

  let currentHours =
    date.getHours() <= 9 ? "0" + date.getHours() : date.getHours();
  let currentMinutes =
    date.getMinutes() <= 9 ? "0" + date.getMinutes() : date.getMinutes();

  return currentHours + ":" + currentMinutes;
};

export const currentDate = () => {
  let date = new Date();
  let currentMonth = Months[date.getMonth()];
  let currentDay = date.getDate();

  return currentMonth + " " + currentDay + ", " + currentTime();
};

export const Coin = () =>
  Math.floor(Math.random() * Math.floor(2)) === 0 ? true : false;
