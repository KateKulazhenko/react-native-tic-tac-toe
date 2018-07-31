var Joi = require('joi-browser');
var validations = require('../validations');

var signupSchema = Joi.object().keys({
  username: validations.username,
  password: validations.password,
});

module.exports = signupSchema;
