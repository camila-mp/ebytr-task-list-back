const { ObjectId } = require('mongodb');
const { connection } = require('../connection');

module.exports = async (id) => {
 const deleteTask = await (await connection())
    .collection('tasks').deleteOne({ _id: ObjectId(id) });
  return deleteTask;
};