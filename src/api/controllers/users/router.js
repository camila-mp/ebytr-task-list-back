const express = require('express');
const createUser = require('./createUser');
const validateUserData = require('../../middlewares/validations/validateUserData');

const router = express.Router();

router.post('/', validateUserData, createUser);

module.exports = router;