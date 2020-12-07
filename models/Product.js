const mongoose = require('mongoose')

// const ReviewSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   rating: { type: Number, required: true },
//   comment: { type: String, required: true },
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     ref: 'users',
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// })

const ProductSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  nameproduct: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  shipping: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  contact: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  likes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
      },
    },
  ],
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
      },
      text: {
        type: String,
        require: true,
      },
      name: {
        type: String,
      },
      avatar: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
})
module.exports = product = mongoose.model('product', ProductSchema)
