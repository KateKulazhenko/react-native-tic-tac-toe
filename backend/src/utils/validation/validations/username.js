var Joi = require("joi-browser");

var name = Joi.string()
.min(3)
.max(30)
.required()
.alphanum()
.label("User Name");

module.exports = name;
