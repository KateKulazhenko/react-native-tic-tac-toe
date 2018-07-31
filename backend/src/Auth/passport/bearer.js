import Bearer from 'passport-http-bearer';
import { dalToken } from '../DAL';

export default new Bearer.Strategy(async (token, done) => {
  try {
    const result = await dalToken.findOne(token);

    if (!result) {
      throw new Error({
        status: 401,
        message: 'You are not authorized',
      });
    }

    return done(null, result);
  } catch (error) {
    return done(error);
  }
});

export const bearerWithUser = new Bearer.Strategy(async (token, done) => {
  try {
    const result = await dalToken.findOne(token);

    if (!result) {
      throw new Error({
        status: 401,
        message: 'You are not authorized',
      });
    }

    return done(null, user);
  } catch (error) {
    return done(error);
  }
});
