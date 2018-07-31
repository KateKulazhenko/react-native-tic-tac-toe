import { Types } from 'mongoose';
import _ from 'lodash';
import { dalGame } from '../../Game/DAL';
import { dalUser } from '../../Auth/DAL';

module.exports = (io) => {
  io.on('connection', function(socket) {
    socket.on('startGame', async function(data) {
      const user = await dalUser.findByQueryWithPopulate({
        query: data.query.token,
      });
      let game = await dalGame.findByQuery({
        status: 'waiting',
        sort: { created_at: -1 },
      });
      if (_.isNil(game)) {
        game = await dalGame.create({
          userCross: Types.ObjectId(user._id),
        });
        socket.join(game._id);
      } else {
        socket.join(game._id);
        await dalGame.findAndUpdate(query, {
          userZero: Types.ObjectId(user._id),
          status: 'playing',
        });
        socket.in(game._id).emit('gameStarted');
      }
    });

    socket.on('playTurn', async (data) => {
      await dalGame.findAndUpdate(query, {
        room: data.game._id,
        field: [data],
      });
      socket.broadcast.in(data.game._id).emit('turnPlayed');
    });

    socket.on('gameEnded', (data) => {
      socket.broadcast.to(data.game._id).emit('gameEnd', data);
    });

    socket.emit('start', { hello: 'world' });
  });
};
