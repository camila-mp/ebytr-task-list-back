const { StatusCodes } = require('http-status-codes');

module.exports = (err, _req, res, _next) => {
  if (code === internalServerError) console.log(err);
  return res
    .status(code)
    .json({ code, message })
};
