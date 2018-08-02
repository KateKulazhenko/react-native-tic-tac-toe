import { createAction } from "redux-actions";

export const signinRequest = createAction("SIGNIN_REQUEST");
export const signinSuccess = createAction("SIGNIN_SUCCESS");
export const signinFailed = createAction("SIGNIN_FAILED");
