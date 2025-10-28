const express = require('express');
const morgan = require('morgan');
const authRouter = require('./routes/auth.routes');
const cardsRouter = require('./routes/cards.routes');
const usersRouter = require('./routes/users.routes');
const cookieParser = require('cookie-parser');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/cards', cardsRouter)
app.use('/api/users', usersRouter)

module.exports = app;
