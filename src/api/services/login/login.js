const findUser = require('../../models/users/findUser');
const emailValidator = require('../../utils/validateEmailFunction')
const { StatusCodes } = require('http-status-codes');


module.exports = async (email, password) => {
  if (!email || !password) {
    return {  code: StatusCodes.UNAUTHORIZED, message: 'All fields must be filled.' };
  }

  const emailValidation = emailValidator(email);
  if (!emailValidation) return { message: 'Invalid e-mail.', code: StatusCodes.UNAUTHORIZED};

  const validateUser = await findUser({ email, password });

  if (!validateUser) {
    return { code: StatusCodes.UNAUTHORIZED, message: 'Sorry, incorrect username or password.' };
  }
  return validateUser;
}