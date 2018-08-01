import { Types } from 'mongoose';
import _ from 'lodash';

import { dalUser, dalToken } from '../DAL';

export const signin = async (req, res) => {
  const { user } = req;
  const { token } = await dalToken.findOneAndUpdate(Types.ObjectId(user._id));

  res.json({ user, token });
};

export const signup = async (req, res) => {
  const { username } = req.body;

  const existedUser = await dalUser.findByQuery({
    username,
  });

  if (!_.isNil(existedUser)) {
    throw new Error('2');
  }

  const user = await dalUser.create(req.body);
  const { token } = await dalToken.create(user._id);

  console.log(user);

  res.json({ user, token });
};
