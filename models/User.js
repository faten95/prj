const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  pseudo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
})

module.exports = user = mongoose.model('user', UserSchema)
