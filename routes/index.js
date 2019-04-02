const express = require('express');
const router  = express.Router();
const User = require('../models/users');

/* GET home page */
router.get('/', (req, res, next) => {
  User.find()
  .then(users => {
    res.render('index', {users: users});
  })
});

module.exports = router;
