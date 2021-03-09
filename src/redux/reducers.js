import { currentDate, currentTime } from "../functions";

const ADD_POST = "ADD-POST";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

export const postsReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        text: state.newPost.replace(/\s+/g, " ").trim(),
        time: currentDate(),
      };

      state.posts.push(newPost);
      state.newPost = "";

      return state;

    case UPDATE_NEW_POST:
      state.newPost = action.newPost;

      return state;

    default:
      return state;
  }
};

export const messagesReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        text: state.newMessage,
        time: currentTime(),
        pos: "r",
        humanID: "2",
      };

      state.messages.push(newMessage);
      state.newMessage = "";

      return state;

    case UPDATE_NEW_MESSAGE:
      state.newMessage = action.newMessage;
      return state;

    default:
      return state;
  }
};
