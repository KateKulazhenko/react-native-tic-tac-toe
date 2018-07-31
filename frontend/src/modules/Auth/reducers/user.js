import { combineActions, handleActions } from "redux-actions";

import * as signUpActionCreators from "../pages/SignUp/actions";
import * as actionCreators from "../actions";

const defaultState = null;

export default handleActions(
  {
    [combineActions(signUpActionCreators.signupSuccess)](state, action) {
      return action.response.data.user;
    },
    [combineActions(actionCreators.logOut)]() {
      return defaultState;
    }
  },
  defaultState
);
