import { createAction } from "redux-actions";

export const signupRequest = createAction("SIGNUP_REQUEST");
export const signupSuccess = createAction("SIGNUP_SUCCESS");
export const signupFailed = createAction("SIGNUP_FAILED");
