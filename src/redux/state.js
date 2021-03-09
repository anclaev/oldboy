import { Coin } from "../functions";
import { postsReducer, messagesReducer } from "./reducers";

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
    this._state = postsReducer(this._state, action);
    this._state = messagesReducer(this._state, action);

    this._callSubscriber(this._state);
  },
};

export const addPostCreator = () => ({ type: "ADD-POST" });

export const updatePostCreator = (text) => ({
  type: "UPDATE-NEW-POST",
  newPost: text,
});

export const addMessageCreator = () => ({ type: "ADD-MESSAGE" });

export const updateMessageCreator = (text) => ({
  type: "UPDATE-NEW-MESSAGE",
  newMessage: text,
});

export default store;
