import { dalGame } from '../../Game/DAL';
import { dalUser, dalToken } from '../../Auth/DAL';
import { checkIsGameFinished } from '../sockets';
import { Types } from 'mongoose';
import _ from 'lodash';

export default async function(socket, io, data) {
  const token = await dalToken.findOne(socket.handshake.query.token);
  const user = await dalUser.findByQuery(token.user);
  const playingGame = await dalGame.findByQuery({
    query: {
      status: 'playing',
      _id: Types.ObjectId(data.gameId),
      $or: [
        { userCross: Types.ObjectId(user._id) },
        { userZero: Types.ObjectId(user._id) },
      ],
    },
    single: true,
  });

  console.log(playingGame.field[data.fieldIndex]);

  let nextPlayerTurn;
  if (_.isNil(playingGame.field[data.fieldIndex])) {
    if (_.isEqual(playingGame.playerTurn, playingGame.userCross)) {
      playingGame.field[data.fieldIndex] = 1;
      nextPlayerTurn = playingGame.userZero;
    } else {
      playingGame.field[data.fieldIndex] = 0;
      nextPlayerTurn = playingGame.userCross;
    }
  } else {
    throw new Error('not allowed');
  }

  await dalGame.findAndUpdate(
    { _id: Types.ObjectId(data.gameId) },
    {
      field: playingGame.field,
      playerTurn: Types.ObjectId(nextPlayerTurn),
    },
  );

  const updatedGame = await dalGame.findByQuery({
    query: {
      status: 'playing',
      _id: Types.ObjectId(data.gameId),
    },
    single: true,
  });
  io.in(updatedGame._id).emit('playTurn', updatedGame);
  await checkIsGameFinished(io, { game: updatedGame, step: data.fieldIndex });
}
