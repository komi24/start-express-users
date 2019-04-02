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


router.get('/profile/:id', (req, res, next) => {
  User.findOne({_id: req.params.id})
  .then(user => {
    res.render('profile', {user: user});
  })
});

module.exports = router;
