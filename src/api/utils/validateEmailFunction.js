const Joi = require('joi');
const { StatusCodes } = require('http-status-codes');

// fonte do regex do email: http://zparacha.com/validate-email-address-using-javascript-regular-expression

module.exports = (email) => {
  const validateEmailFormat = Joi.object({
    email: Joi.string().regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) })
    .validate({ email });
  
  if (validateEmailFormat.error) {
    return { message: 'Invalid e-mail.', code: StatusCodes.UNAUTHORIZED};
  }
  return true;
};
