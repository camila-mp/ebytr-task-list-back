const createUserModel = require('../../models/users/createUser');
const findUserModel = require('../../models/users/findUser');
const { StatusCodes } = require('http-status-codes');

module.exports = async (userData) => {
  const { username, email, password } = userData;

  if (!username || !email || !password) {
    return {
      code: StatusCodes.BAD_REQUEST,
      message: 'All fields are required',
    }
  };

  const checkEmailExistence = await findUserModel({ email });

  if (checkEmailExistence) return { code: StatusCodes.CONFLICT, message: 'Email already registered'};

  const newUser = await createUserModel(userData);
  return newUser;
};
