const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
  "picture": String,
  "age": Number,
  "name": {
    type: String,
    required: true
  },
  "gender": {
    type: String,
    enum: ['male', 'female']
  },
  "email": String,
  "phone": String,
  "address": String,
  "about": String
})

const User = mongoose.model('user', UserSchema);

module.exports = User;