const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    // required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0.01,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  quantityInStock: {
    type: Number,
    required: true,
    min: 0,
  },
  image: {
    type: String, // URL of the image?
    // required: true,
    trim: true,
  },
  vendor: {
    type: String,
    required: true,
    trim: true,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Review',
    },
  ],

});

const Product = model('Product', productSchema);

module.exports = Product;
