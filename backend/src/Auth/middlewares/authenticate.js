import passport from 'passport';

export const localPassport = passport.authenticate('local', { session: false });
