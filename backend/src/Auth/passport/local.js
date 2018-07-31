import Local from 'passport-local';
import _ from 'lodash';
import { dalUser } from '../DAL';

export default new Local.Strategy(
  { usernameField: 'username' },
  async (username, password, done) => {
    try {
      let user = await dalUser.findByQueryWithPopulate({
        query: { username },
        select: '+password +salt',
      });

      if (!user || !user.checkPassword(password)) {
        throw new Error('8');
      }

      return done(null, _.omit(user, ['password', 'salt']));
    } catch (err) {
      return done(err);
    }
  },
);
