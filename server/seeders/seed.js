const db = require('../config/connection');
const { User, Product, Review, Vendor } = require('../models');
const userSeeds = require('./userSeeds.json');
const productSeeds = require('./productSeeds.json');
const vendorSeeds = require('./vendorSeeds.json')

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Vendor.deleteMany({});
    await Product.deleteMany({});
    await Review.deleteMany({});

    await User.create(userSeeds);
    await Vendor.create(vendorSeeds);
    await Product.create(productSeeds);

    // populate vendor with associated products
    const products = await Product.find({});
      for(let i =0; i < products.length; i++) {

        const { _id, vendor } = products[i];
        const vendorName = await Vendor.findOneAndUpdate(
          { name: vendor },
          { $addToSet: {products: _id,} }
        ).populate('products');
      }

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
