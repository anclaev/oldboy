import { createStore, combineReducers } from "redux";

import { postsReducer, messagesReducer, humansReducer } from "./reducers";

const reducers = combineReducers({
  posts: postsReducer,
  messages: messagesReducer,
  humans: humansReducer,
});

let store = createStore(reducers);

export default store;
