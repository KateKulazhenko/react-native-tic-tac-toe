import Joi from 'joi-browser';
import validations from '../validations';

const signupSchema = Joi.object().keys({
  username: validations.username,
  password: validations.password,
});

export default signupSchema;
