const loginService = require('../../services/login/login');
const { genToken } = require('../../utils/authFunctions');
const { StatusCodes } = require('http-status-codes');

module.exports = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const userLogin = await loginService(email, password);

    if (userLogin.message) return next(userLogin);
    
    const token = genToken({ email, password });

    return res.status(StatusCodes.OK).json({ token });
  } catch (err) {
    err.message = 'Internal server error';
    err.code = StatusCodes.INTERNAL_SERVER_ERROR;
    next(err);
  }
};