import { all } from "redux-saga/effects";

import signupSaga from "../pages/SignUp/saga";
// import signinSaga from '../pages/SignIn/saga';

export default function* authSaga() {
  yield all([signupSaga()]);
}
