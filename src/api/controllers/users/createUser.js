const createUserService = require('../../services/users/createUser');
const { StatusCodes } = require('http-status-codes');

module.exports = async (req, res, next) => {
  const userData = req.body;
  try {
    const newUser = await createUserService(userData); //tries to create user

    if (newUser.message) next(newUser); // check if error message exists, if yes, go to errorHandler
    res.status(StatusCodes.OK).json(newUser);

  } catch (err) {
    console.log(err); // prints error info
    err.message = 'Internal server error';
    err.code = StatusCodes.INTERNAL_SERVER_ERROR;
    next(err);
  }
};
