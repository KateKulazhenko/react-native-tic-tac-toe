import { validate } from '../../utils/validation';

export const signinValidation = (req, res, next) =>
  validate(req, res, next, 'validateSignin');

export const signupValidation = (req, res, next) =>
  validate(req, res, next, 'validateSignup');
