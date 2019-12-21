const express = require('express');
const router = express.Router();

const { usersRouter } = require('../controllers/UserController');

router.use('/api/users', usersRouter);

module.exports = {
  router
};
