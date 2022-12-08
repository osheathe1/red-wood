const db = require('../config/connection');
const { User, Product, Review, Vendor } = require('../models');
const userSeeds = require('./userSeeds.json');
const productSeeds = require('./productSeeds.json');
const vendorSeeds = require('./vendorSeeds.json')
const reviewSeeds = require('./reviewSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Vendor.deleteMany({});
    await Product.deleteMany({});
    await Review.deleteMany({});

    await User.create(userSeeds);
    await Vendor.create(vendorSeeds);
    await Product.create(productSeeds);
    await Review.create(reviewSeeds);

    // populate vendor with associated products
    const products = await Product.find({});
      for(let i =0; i < products.length; i++) {

        const { _id, vendor } = products[i];
        const vendorName = await Vendor.findOneAndUpdate(
          { name: vendor },
          { $addToSet: {products: _id,} }
        ).populate('products');
      }

    // assign review to random product and populate user with associated reviews
    const reviews = await Review.find({});
      for(let i =0; i < reviews.length; i++) {
        
        const { _id, username } = reviews[i];
        const randomProduct = await Product.aggregate([{ $sample: { size: 1 } }]);
        const productId = randomProduct[0]._id;
        const product = await Product.findOneAndUpdate(
          { _id: productId },
          { $addToSet: { reviews: _id } }
        ).populate('reviews');
        const user = await User.findOneAndUpdate(
          { username: username },
          { $addToSet: { reviews: _id } }
        ).populate('reviews');
      }
 

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
