import Joi from 'joi-browser';
import _ from 'lodash';
import errorMessages from '../errors';

function validate(data, schema) {
  let result;
  const response = Joi.validate(data, schema, {
    abortEarly: false,
  });

  if (response.error && response.error.details) {
    result = response.error.details.reduce((memo, item) => {
      const error = errorMessages(
        item.type,
        item.context.label,
        item.context.limit,
        item.context.peersWithLabels,
      );

      _.set(memo, item.path.join('.'), error);
      return memo;
    }, {});
  } else {
    result = {};
  }

  return result;
}

export default validate;
