import { createSelector } from 'reselect';
import _ from 'lodash';

export const getToken = (state) => _.get(state, 'auth.token', null);
export const getIsSignedIn = createSelector(
  [getToken],
  (token) => !_.isNil(token),
);
export const getUserId = (state) => _.get(state, 'auth.user._id', null);
