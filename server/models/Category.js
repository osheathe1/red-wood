const { Schema, model } = require('mongoose');
const { Category } = require('.');

const categorySchema = new Schema({
  text: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 40,
    trim: true,
  },
});



const Category = model('Review', categorySchema);

module.exports = Category;