const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
  text: {
    type: String,
    required: 'You need to leave a review!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
  },
  stars: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  }
});



const Review = model('Review', reviewSchema);

module.exports = Review;