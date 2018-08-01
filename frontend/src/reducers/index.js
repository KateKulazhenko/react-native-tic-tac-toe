import { persistCombineReducers } from "redux-persist";
import { reducer as reduxFormReducer } from "redux-form";

import { CONFIG } from "../constants";
import auth from "../modules/Auth/reducers";

const rootReducer = persistCombineReducers(CONFIG, {
  form: reduxFormReducer,
  auth
});

export default rootReducer;
