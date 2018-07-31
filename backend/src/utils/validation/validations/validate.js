var Joi = require('joi-browser');
var _ = require('lodash');

var errorMessages = require('../errors');

function validate(data, schema) {
  var result;
  var response = Joi.validate(data, schema, {
    abortEarly: false,
  });

  if (response.error && response.error.details) {
    result = response.error.details.reduce(function(memo, item) {
      var error = errorMessages(
        item.type,
        item.context.label,
        item.context.limit,
        item.context.peersWithLabels
      );

      _.set(memo, item.path.join('.'), error);
      return memo;
    }, {});
  } else {
    result = {};
  }

  return result;
}

module.exports = validate;
