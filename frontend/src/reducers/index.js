import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

import auth from "../modules/Auth/reducers";

const rootReducer = combineReducers({
  form: reduxFormReducer,
  auth
});

export default rootReducer;
