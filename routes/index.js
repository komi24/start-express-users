const express = require('express');
const router  = express.Router();
const User = require('../models/users');
const Order = require('../models/orders');

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

router.get('/profile/:id/orders', (req, res, next) => {
  Order.find({owner: req.params.id})
  .populate('owner')
  .then(order => {
    res.send(order);
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

router.post('/order/:ownerid', (req, res, next) => {
  let new_order = req.body
  new_order.owner = req.params.ownerid

  Order.create(new_order)
  .then(order => {
    res.redirect('/profile/'+req.params.ownerid);
  })
});

module.exports = router;
