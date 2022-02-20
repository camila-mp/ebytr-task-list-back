const { StatusCodes } = require('http-status-codes');
const { ObjectId } = require('mongodb');

module.exports = async (req, _res, next) => {
  const { id } = req.params;

  if (!id) {
    return next({ code: StatusCodes.BAD_REQUEST, message: 'Task id is required.' });
  }

  if (!ObjectId.isValid(id) || id === null || id === undefined) {
    return next({ code: StatusCodes.BAD_REQUEST, message: 'Task id is invalid.' });
  }
  return next();
  
};