const { connection } = require('../connection');
// this function is used in: createUser (service) and login (service)

const findUser = async (data) => {
  const user = await (await connection()).collection('users')
    .findOne(data);
  return user;
};

module.exports = findUser;