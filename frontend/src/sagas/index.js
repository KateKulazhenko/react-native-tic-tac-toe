import { all } from "redux-saga/effects";

import watchRequest from "./watchRequest";
import authSaga from "../modules/Auth/saga";

export default function* rootSaga() {
  yield all([watchRequest(), authSaga()]);
}
