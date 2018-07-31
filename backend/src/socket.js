import { startGame, playTurn } from './Game/sockets';
import { dalToken } from './Auth/DAL';

module.exports = (io) => {
  io.use(async function(socket, next) {
    if (socket.handshake.query && socket.handshake.query.token) {
      const result = await dalToken.findOne(socket.handshake.query.token);
      if (!result) {
        throw new Error('8');
      } else {
        next();
      }
    } else {
      throw new Error('8');
    }
  });

  io.on('connection', function(socket) {
    socket.on('startGame', () => startGame(socket, io));
    socket.on('turnPlayed', (data) => playTurn(socket, io, data));
  });
};
