const { connection } = require('../connection');
const { ObjectId } = require('mongodb');

module.exports = async (id) => {
  const targetTask = await (await connection()).collection('tasks').findOne({ _id: ObjectId(id) });
  return targetTask;
};