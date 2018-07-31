import { combineReducers } from "redux";

import token from "./token";
import user from "./user";

const reducer = combineReducers({
  token,
  user
});

export default reducer;
