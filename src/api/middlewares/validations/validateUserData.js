const Joi = require('joi');
const { StatusCodes } = require('http-status-codes');

// fonte do regex do email: http://zparacha.com/validate-email-address-using-javascript-regular-expression

const validateUserData = (req, _res, next) => {
  req.body = { username, email, password };
  const validation = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/).required(),
    password: Joi.string().min(6).required(),
  }).validate({ username, email, password });

  if (validation.error) {
    return next({
      code: StatusCodes.BAD_REQUEST,
      message: 'Information provided is invalid. Check if your password is at least 6 characters long and your e-mail is valid.',
    });
  } 
  return next();
};

module.exports = validateUserData;