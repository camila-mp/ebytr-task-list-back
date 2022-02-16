const findUser = require('../../models/users/findUser');
const emailVal = require('../../utils/validateEmailFunction')
const { StatusCodes } = require('http-status-codes');


module.exports = async (email, password) => {
  if (!email || !password) {
    return { message: 'All fields must be filled.', code: StatusCodes.UNAUTHORIZED };
  }

  const emailValidation = emailVal(email);
  if (emailValidation.message) return emailValidation;

  const validateUser = await findUser({ email, password });

  if (!validateUser) {
    return { message: 'Sorry, incorrect username or password.', code: StatusCodes.UNAUTHORIZED };
  }
  return validateUser;
}