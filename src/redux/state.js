const Coin = () =>
  Math.floor(Math.random() * Math.floor(2)) === 0 ? true : false;

let store = {
  _state: {
    humans: [
      {
        id: 1,
        name: "Andrew",
        surname: "Hardman",
        ava: "andrew",
        status: `${Coin() === true ? `online` : "offline"}`,
      },
      {
        id: 2,
        name: "Sasha",
        surname: "Roys",
        ava: "sasha",
        status: `${Coin() === true ? `online` : "offline"}`,
      },
      {
        id: 3,
        name: "Oleg",
        surname: "Jarov",
        ava: "oleg",
        status: `${Coin() === true ? `online` : "offline"}`,
      },
      {
        id: 4,
        name: "Anna",
        surname: "Albrant",
        ava: "anna",
        status: `${Coin() === true ? `online` : "offline"}`,
      },
    ],
    posts: [
      { id: 1, text: "How stupid that is.", time: "March 4, 19:35" },
      { id: 2, text: "Hey, what are you doing?", time: "March 4, 19:37" },
    ],
    messages: [
      { text: "Hi, whats up?", time: "20:35", pos: "l", humanID: "1" },

      {
        text: "Not bad. Got a job. How are you?",
        time: "20:37",
        pos: "r",
        humanID: "1",
      },

      {
        text: "Very good! I'm getting married soon! You're invited!",
        time: "20:40",
        pos: "l",
        humanID: "1",
      },

      {
        text: "Wow, cool! When will the wedding be?",
        time: "20:45",
        pos: "r",
        humanID: "1",
      },

      {
        text: "March 17, 12:00, Yekaterinburg. The dress code is a white tie.",
        time: "21:00",
        pos: "l",
        humanID: "1",
      },
    ],
    newPost: "",
  },
  getState() {
    return this._state;
  },
  addPost() {
    let date = new Date();
    let postTime = date.getHours() + ":" + date.getMinutes();

    let newPost = {
      id: 5,
      text: this._state.newPost,
      time: postTime,
    };

    this._state.posts.push(newPost);
    this._state.newPost = "";
    this._callSubscriber(this._state);
  },
  changePost(val) {
    this._state.newPost = val;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _callSubscriber() {},
};

export default store;
