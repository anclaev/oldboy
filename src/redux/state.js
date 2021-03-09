const Coin = () =>
  Math.floor(Math.random() * Math.floor(2)) === 0 ? true : false;

const ADD_POST = "ADD-POST";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

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
    newMessage: "",
  },

  _callSubscriber() {},

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let date = new Date();

      let currentHours =
        date.getHours() <= 9 ? "0" + date.getHours() : date.getHours();
      let currentMinutes =
        date.getMinutes().length <= 9
          ? "0" + date.getMinutes()
          : date.getMinutes();

      let currentTime = currentHours + ":" + currentMinutes;
      let newPost = {
        id: 5,
        text: this._state.newPost.replace(/\s+/g, " ").trim(),
        time: currentTime,
      };

      this._state.posts.push(newPost);
      this._state.newPost = "";
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let date = new Date();

      let currentHours =
        date.getHours() <= 9 ? "0" + date.getHours() : date.getHours();
      let currentMinutes =
        date.getMinutes().length <= 9
          ? "0" + date.getMinutes()
          : date.getMinutes();

      let currentTime = currentHours + ":" + currentMinutes;

      let newMessage = {
        text: this._state.newMessage,
        time: currentTime,
        pos: "r",
        humanID: "2",
      };

      this._state.messages.push(newMessage);
      this._state.newMessage = "";

      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST) {
      this._state.newPost = action.newPost;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE) {
      this._state.newMessage = action.newMessage;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostCreator = () => ({ type: ADD_POST });

export const updatePostCreator = (text) => ({
  type: UPDATE_NEW_POST,
  newPost: text,
});

export const addMessageCreator = () => ({ type: ADD_MESSAGE });

export const updateMessageCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE,
  newMessage: text,
});

export default store;
