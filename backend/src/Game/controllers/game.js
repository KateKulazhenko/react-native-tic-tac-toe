import { Types } from 'mongoose';
import _ from 'lodash';
import { dalGame } from '../DAL';

export const startGame = async (req, res) => {
  const { user } = req;

  const game = await dalGame.find(
    { full: false },
    { sort: { created_at: -1 } },
  );
  if (_.isNil(game)) {
    await dalGame.create({ userCross: Types.ObjectId(user._id) });
  } else {
    await dalGame.findAndUpdate(query, {
      userZero: Types.ObjectId(user._id),
      full: true,
    });
  }
  res.sendStatus(204);
};
