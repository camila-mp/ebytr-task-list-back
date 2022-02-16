const { connection } = require('../connection');

const createUser = async (userData) => {
  const newUser = await (await connection()).collection('users')
    .insertOne({ ...userData });
  return ({
    ...userData,
    _id: newUser.insertedId,
  });
};

module.exports = createUser;