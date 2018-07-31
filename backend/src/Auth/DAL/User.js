import { User } from '../models';
import toObject from '../../utils/toObject';

const findByQuery = async (query) => await User.findOne(query);

const create = async (body) => {
  const userDoc = await User.create(body);
  return toObject(userDoc, ['password', 'salt']);
};

const findByQueryWithPopulate = async ({ query, select = '', path = [] }) => {
  console.log(query);
  return await User.findOne(query)
    .select(select)
    .populate(path);
};

export default { create, findByQuery, findByQueryWithPopulate };
