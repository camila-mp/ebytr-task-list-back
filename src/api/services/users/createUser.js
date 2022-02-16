const createUserModel = require('../../models/users/createUser');
const findUserModel = require('../../models/users/findUser');
const { StatusCodes } = require('http-status-codes');

module.exports = async (userData) => {
  const { email } = userData;

  const checkEmailExistence = await findUserModel({ email });

  if (checkEmailExistence) return { code: StatusCodes.CONFLICT, message: 'Email already registered.'};

  const newUser = await createUserModel(userData);
  return newUser;
};
