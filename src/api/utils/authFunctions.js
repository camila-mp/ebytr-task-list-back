const jwt = require('jsonwebtoken');
const findUser = require('../models/users/findUser');
const { StatusCodes } = require('http-status-codes');
require('dotenv').config();

const API_SECRET = process.env.API_SECRET;

const JWT_CONFIG = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const genToken = (data) => jwt.sign({ data }, API_SECRET, JWT_CONFIG);

const validateToken = async (token) => {
  try {
    const decoded = jwt.verify(token, API_SECRET);
    const { email, password } = decoded.data;

    const user = await findUser({ email, password });

    if (user) {
      return user;
    }

    return false;
  } catch (err) {
    err.message = 'Internal server error';
    err.code = StatusCodes.INTERNAL_SERVER_ERROR;
    return err;
  }
};

module.exports = { genToken, validateToken };