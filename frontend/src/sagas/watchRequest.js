import { call, put, takeEvery } from "redux-saga/effects";
import _ from "lodash";

import api from "../services/api";
import { request } from "../services/handleRequest";

function* callApi(action) {
  const { payload, type } = action;
  const apiMethodName = _.camelCase(type);
  const requestData = api[apiMethodName](payload);

  try {
    const response = yield call(request, requestData);
    const successType = action.type.replace("_REQUEST", "_SUCCESS");
    yield put({ type: successType, payload, response });
  } catch (err) {
    const failedType = action.type.replace("_REQUEST", "_FAILED");
    yield put({ type: failedType, payload, response: err.response, err });
  }
}

export default function* watchRequest() {
  yield takeEvery(({ type }) => /_REQUEST$/g.test(type), callApi);
}
