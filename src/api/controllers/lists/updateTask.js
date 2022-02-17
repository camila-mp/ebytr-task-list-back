const { StatusCodes } = require('http-status-codes');
const updateService = require('../../services/lists/updateTaskStatus');

module.exports = async (req, res, next) => {
  const { status } = req.body;
  const { id } = req.params;

  try {
    const updateTaskStatus = await updateService(id, status);

    return res.status(StatusCodes.OK).json(updateTaskStatus);
  } catch (err) {
    err.message = 'Internal server error';
    err.code = StatusCodes.INTERNAL_SERVER_ERROR;
    next(err);
  }
};