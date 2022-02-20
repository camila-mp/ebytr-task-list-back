const { StatusCodes } = require('http-status-codes');
const updateService = require('../../services/tasks/updateTask');

module.exports = async (req, res, next) => {
  const { editedData } = req.body;
  const { id } = req.params;

  try {
    const updateTaskStatus = await updateService(id, editedData);

    return res.status(StatusCodes.OK).json(updateTaskStatus);
  } catch (err) {
    err.message = 'Internal server error';
    err.code = StatusCodes.INTERNAL_SERVER_ERROR;
    next(err);
  }
};