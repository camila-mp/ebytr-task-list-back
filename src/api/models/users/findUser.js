const { connection } = require('../connection');

const findUser = async (userData) => {
  const user = await (await connection()).collection('users')
    .findOne({ ...userData });
  return user;
};

module.exports = findUser;