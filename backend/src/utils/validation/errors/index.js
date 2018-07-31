function notValid(label) {
  return label + " not valid";
}

function errorMessages(type, label, limit) {
  var message = "";

  switch (type) {
    case "any.required":
      message = "Required";
      break;
    case "string.base":
      message = label + " must be a string";
      break;
    case "string.min":
      message = "Min length " + limit + " symbols";
      break;
    case "string.max":
      message = "Max length " + limit + " symbols";
      break;
    case "string.regex.base":
      message = notValid(label);
      break;
    case "string.alphanum":
      message = notValid(label);
      break;
    default:
      break;
  }

  return message;
}

module.exports = errorMessages;
