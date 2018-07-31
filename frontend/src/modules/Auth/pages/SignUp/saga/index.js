import { all, put, takeEvery } from "redux-saga/effects";
import { destroy } from "redux-form";
// import { push } from "connected-react-router";

import * as actionCreators from "../actions";
import { SIGNUP_FORM } from "../constants";

function* redirectToHome() {
  yield put(destroy(SIGNUP_FORM));
}

export default function* watchRequest() {
  yield all([takeEvery(actionCreators.signupSuccess, redirectToHome)]);
}
