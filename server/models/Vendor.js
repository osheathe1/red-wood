const { Schema, model } = require('mongoose');

const vendorSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
});

const Vendor = model('Vendor', vendorSchema);

module.exports = Vendor;