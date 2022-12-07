const db = require('../config/connection');
const { User, Product, Review, Vendor } = require('../models');
const userSeeds = require('./userSeeds.json');
const productSeeds = require('./productSeeds.json');
const vendorSeeds = require('./vendorSeeds.json')

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Product.deleteMany({});
    await Vendor.deleteMany({});
    await Review.deleteMany({});

    await User.create(userSeeds);
    await Vendor.create(vendorSeeds);
    await Product.create(productSeeds);

    // iterate through productSeeds and add to Vendor products array -- this is not working
    for (let i = 0; i < productSeeds.length; i++) {
      const { _id, vendorName } = await Product.create(productSeeds[i]);
      const vendor = await Vendor.findOneAndUpdate(
        { name: vendorName },
        {
          $addToSet: {
            products: _id,
          },
        }
      );
    }


  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
