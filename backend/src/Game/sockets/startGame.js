import { Types } from 'mongoose';
import _ from 'lodash';
import { dalGame } from '../../Game/DAL';
import { dalUser, dalToken } from '../../Auth/DAL';

export default async function(socket, io) {
  const token = await dalToken.findOne(socket.handshake.query.token);
  const user = await dalUser.findByQuery(token.user);
  const waitingGame = await dalGame.findByQuery({
    query: {
      status: 'waiting',
    },
    single: true,
  });
  const playingGame = await dalGame.findByQuery({
    query: {
      $and: [
        {
          $or: [{ status: 'waiting' }, { status: 'playing' }],
        },
        {
          $or: [
            { userCross: Types.ObjectId(user._id) },
            { userZero: Types.ObjectId(user._id) },
          ],
        },
      ],
    },
    single: true,
  });

  if (_.isNil(waitingGame) && _.isNil(playingGame)) {
    console.log('1');
    const newGame = await dalGame.create({
      userCross: Types.ObjectId(user._id),
    });

    socket.join(newGame._id);
  } else if (!_.isNil(playingGame)) {
    console.log('You are already in the game');

    socket.join(playingGame._id);

    _.isEqual(playingGame.status, 'playing') &&
      io.in(playingGame._id).emit('playTurn', playingGame);
  } else {
    console.log('2');
    socket.join(waitingGame._id);
    const playTurn = _.isEqual(Math.round(Math.random()), 1)
      ? waitingGame.userCross
      : Types.ObjectId(user._id);
    await dalGame.findAndUpdate(
      { _id: Types.ObjectId(waitingGame._id) },
      {
        userZero: Types.ObjectId(user._id),
        status: 'playing',
        playerTurn: playTurn,
      },
    );

    const startedGame = await dalGame.findByQuery({
      query: {
        _id: Types.ObjectId(waitingGame._id),
        status: 'playing',
      },
      single: true,
    });

    io.in(startedGame._id)
      .emit('gameStarted', startedGame)
      .emit('playTurn', startedGame);
  }
}
