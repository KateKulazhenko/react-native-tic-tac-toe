import _ from 'lodash';

import { Game } from '../models';
import toObject from '../../utils/toObject';

const findByQuery = async ({ query, single = false }) =>
  _.isEqual(single, true)
    ? await Game.findOne(query, {}, { sort: { createdAt: -1 } })
    : await Game.find(query, {}, { sort: { createdAt: -1 } });

const findAndUpdate = async (query, update) => await Game.update(query, update);

const create = async (body) => {
  const gameDoc = await Game.create(body);
  return toObject(gameDoc);
};
export default { create, findByQuery, findAndUpdate };
