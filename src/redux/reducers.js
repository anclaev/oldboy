import { currentDate, currentTime, Coin } from "../functions";

const ADD_POST = "ADD-POST";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

const initialState = {
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

  posts: {
    new: "",
    data: [
      { id: 1, text: "How stupid that is.", time: "March 4, 19:35" },
      { id: 2, text: "Hey, what are you doing?", time: "March 4, 19:37" },
    ],
  },

  messages: {
    new: "",
    data: [
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
  },
};

// Reducers

export const postsReducer = (state = initialState.posts, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        text: state.new.replace(/\s+/g, " ").trim(),
        time: currentDate(),
      };

      state.data.push(newPost);
      state.new = "";

      return state;

    case UPDATE_NEW_POST:
      state.new = action.newPost;

      return state;

    default:
      return state;
  }
};

export const messagesReducer = (state = initialState.messages, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        text: state.new,
        time: currentTime(),
        pos: "r",
        humanID: "2",
      };

      state.data.push(newMessage);
      state.new = "";

      return state;

    case UPDATE_NEW_MESSAGE:
      state.new = action.newMessage;

      return state;

    default:
      return state;
  }
};

export const humansReducer = (state = initialState.humans, action) => {
  return state;
};

export const newReducer = (state = initialState.new, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Creators

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
