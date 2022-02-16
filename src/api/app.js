const express = require('express');
const errorHandler = require('./middlewares/errorHandler/errorHandler');
const usersRouter = require('./controllers/users/router');

const app = express();

app.use(express.json());

app.use('/users', usersRouter);
// app.use('/login', loginRouter);
// app.use('/lists', listsRouter);

app.use(errorHandler);

module.exports = app;