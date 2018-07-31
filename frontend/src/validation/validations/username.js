import Joi from 'joi-browser';

const name = Joi.string()
  .min(3)
  .max(30)
  .required()
  .alphanum()
  .label('User Name');

export default name;
