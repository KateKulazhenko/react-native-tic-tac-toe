var Joi = require("joi-browser");

var password = Joi.string()
  .min(6)
  .required()
  .alphanum()
  .label( "Password");


module.exports = password;
