import { Token } from '../models';
import { Types } from 'mongoose';
import toObject from '../../utils/toObject';

const findOne = async (token) => await Token.findOne({ token });

const create = async (userId) => {
  const token = await Token.create({ user: userId });

  return toObject(token);
};

const findOneAndUpdate = async (userId) =>
  await Token.findOneAndUpdate(
    { user: Types.ObjectId(userId) },
    {},
    { new: true },
  );

export default { findOne, create, findOneAndUpdate };
