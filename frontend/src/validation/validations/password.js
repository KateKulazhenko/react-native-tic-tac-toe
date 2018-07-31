import Joi from 'joi-browser';

const password = Joi.string()
  .min(6)
  .required()
  .alphanum()
  .label('Password');

export default password;
