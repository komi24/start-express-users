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

router.get('/update/:id', (req, res, next) => {
  User.findOne({_id: req.params.id})
  .then(user => {
    res.render('update', {user: user});
  })
});

router.post('/update/:id', (req, res, next) => {
  User.updateOne({_id: req.params.id}, {$set: req.body})
  .then(user => {
    res.redirect('/profile/'+req.params.id);
  })
});

module.exports = router;
