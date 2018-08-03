import { all, put, takeEvery } from "redux-saga/effects";
import { destroy } from "redux-form";
import { navigate } from ".././../../../../services/navigationService";

import * as actionCreators from "../actions";
import { SIGNIN_FORM } from "../constants";

function* redirectToHome() {
  yield put(destroy(SIGNIN_FORM));
  navigate("HomeScreen");
}

export default function* watchRequest() {
  yield all([takeEvery(actionCreators.signinSuccess, redirectToHome)]);
}
