var Joi = require('joi-browser');
var schemas = require('./schemas');
var validations = require('./validations');

const validateFunctions = {
  validateSignin: function(data) {
    return validations.validate(data, schemas.signinSchema);
  },
  validateSignup: function(data) {
    return validations.validate(data, schemas.signupSchema);
  },
  validateUsername: function(data) {
    return validations.validate(data, validations.username);
  },
  validatePassword: function(data) {
    return validations.validate(data, validations.password);
  },
};

const errorHandler = (error, res, next) => {
  if (Object.keys(error).length) {
    res.status(500).json(error);
  } else {
    next();
  }
};

const validate = (req, res, next, funcName) => {
  const error = validateFunctions[funcName](req.body);
  errorHandler(error, res, next);
};

module.exports = {
  validate,
};
