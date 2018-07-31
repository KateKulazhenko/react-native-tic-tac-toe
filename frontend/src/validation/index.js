import schemas from './schemas';
import validations from './validations';

const validateFunctions = {
  validateSignin(data) {
    return validations.validate(data, schemas.signinSchema);
  },
  validateSignup(data) {
    return validations.validate(data, schemas.signupSchema);
  },
  validateUsername(data) {
    return validations.validate(data, validations.username);
  },
  validatePassword(data) {
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

export default {
  validate,
  ...validateFunctions,
};
