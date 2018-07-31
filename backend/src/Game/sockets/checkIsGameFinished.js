import { dalGame } from '../../Game/DAL';
import { Types } from 'mongoose';
import _ from 'lodash';

export default async function(io, { game, step }) {
  const allPossibleWinVariants = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const userType = _.isEqual(game.playerTurn, game.userCross) ? 0 : 1;

  const userPossibleWinVariants = _.filter(allPossibleWinVariants, (variant) =>
    _.includes(variant, step),
  );
  const winCombination = _.find(userPossibleWinVariants, (variant) =>
    variant.every((index) => _.isEqual(game.field[index], userType)),
  );
  console.log('22---------------------');
  console.log(winCombination);
  if (winCombination) {
    await dalGame.findAndUpdate(
      { _id: Types.ObjectId(game._id) },
      {
        status: 'finished',
      },
    );
    _.isEqual(userType, 1)
      ? io.in(game._id).emit('gameFinished', {
          message: 'Cross Win!',
          winCombination: winCombination,
        })
      : io.in(game._id).emit('gameFinished', {
          message: 'Zero Win!',
          winCombination: winCombination,
        });
  } else {
    if (!_.includes(game.field, null)) {
      await dalGame.findAndUpdate(
        { _id: Types.ObjectId(game._id) },
        {
          status: 'finished',
        },
      );
      io.in(game._id).emit('gameFinished', {
        message: 'Draw!',
        winCombination: null,
      });
    }
  }
}
