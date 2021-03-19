import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { registerReducer } from "./Register/reducer";

import { loginReducer } from "./Login/reducer";
import { bucketListReducer } from "./Bucket/reducer";

const rootReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
  bucketList: bucketListReducer,
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  createComposer(applyMiddleware(thunk))
);
