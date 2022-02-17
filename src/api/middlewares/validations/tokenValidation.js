const { validateToken } = require('../../utils/authFunctions');
const { StatusCodes } = require('http-status-codes');

module.exports = async (req, _res, next) => {
  const token = req.headers.authorization;

  if (!token) return next({ message: 'Missing authentication token.', code: StatusCodes.UNAUTHORIZED });

  const tokenValidation = await validateToken(token);

  if (!tokenValidation) {
    return next({ message: 'Sorry, invalid token.', code: StatusCodes.UNAUTHORIZED });
  } 
  
  req.userId = tokenValidation;
  return next();
};