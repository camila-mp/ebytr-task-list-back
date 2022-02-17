const express = require('express');
const tokenValidation = require('../../middlewares/validations/tokenValidation');
const createNewTask = require('./createTask');
const getAllTasks = require('./getAllTasks');
const updateTaskStatus = require('./updateTask');
const deleteTask = require('./deleteTask');

const router = express.Router();

router.post('/', tokenValidation, createNewTask);
router.get('/', tokenValidation, getAllTasks);
router.patch('/updatestatus/:id', tokenValidation, updateTaskStatus);
router.delete('/:id', tokenValidation, deleteTask);

module.exports = router;