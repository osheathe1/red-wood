const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Review, Vendor } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // ---------------------
    // USER QUERIES
    // ---------------------
    users: async () => { // will we need to use this?
      return User.find().populate('reviews');
    },
    user: async (parent, { username }) => {
      console.log(username) // will we need to use this?
      return User.findOne({ username }).populate('reviews');
    },
    // user profile
    me: async (parent, args, context) => {
      if (context.user) {
        console.log(context)
        return User.findOne({ _id: context.user._id }).populate('reviews');
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    // ---------------------
    // PRODUCT QUERIES
    // ---------------------
    // get all products
    products: async () => {
      return Product.find().populate('reviews');
    },
    product: async (parent, { productId }) => {
      return Product.findOne({ _id: productId }).populate('reviews');
    },

    // get products by category
    productsByCategory: async (parent, { category }) => {
      return Product.find({ category }).populate('reviews');
    },

    // ---------------------
    // REVIEW QUERIES
    // ---------------------
    // get all reviews -- is this needed?
    reviews: async () => {
      return Review.find().populate('product');
    },

    // get review by id
    review: async (parent, { reviewId }) => {
      return Review.findOne({ _id: reviewId }).populate('product');
    },
  
    // ---------------------
    // VENDOR QUERIES
    // ---------------------
    // get all vendors
    vendors: async () => {
      return Vendor.find().populate('products');
    },
    vendor: async (parent, { vendorId }) => {
      return Vendor.findOne({ _id: vendorId }).populate('products');
    },

  },

  Mutation: {
    // ---------------------
    // USER MUTATIONS
    // ---------------------
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    // ---------------------
    // PRODUCT MUTATIONS
    // ---------------------
    // add new product
    addProduct: async (parent, { name, description, price, category, quantityInStock, image, vendor }) => {
      const product = await Product.create({ name, description, price, category, quantityInStock, image, vendor });
      return product;
    },

    // update product
    updateProduct: async (parent, { productId, name, description, price, category, quantityInStock, image, vendor }) => {
      const product = await Product.findOneAndUpdate(
        { _id: productId },
        { $set: { name, description, price, category, quantityInStock, image, vendor } },
        { new: true }
      );
      return product;
    },

    // delete product
    deleteProduct: async (parent, { productId }) => {
      const product = await Product.deleteOne(
        { _id: productId }
      );

      return product;
    },

    // ---------------------
    // REVIEW MUTATIONS
    // ---------------------
    // add review to product
    addReview: async (parent, { productId, reviewText, stars }, context) => {
      if (context.user) {
        const review = await Review.create({ reviewText, stars, username: context.user.username });

        // add review to product
        await Product.findOneAndUpdate( 
          { _id: productId },
          { $addToSet: { reviews: review._id } }
        );

        // add review to user
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { reviews: review._id } }
        );
        return review;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    // remove review from product
    removeReview: async (parent, { productId, reviewId }, context) => {
      if (context.user) { 
        const review = await Review.findOneAndDelete({ 
          _id: reviewId,
          username: context.user.username,
        });

        await Product.findOneAndUpdate(
          { _id: productId },
          { $pull: { reviews: review._id } }
        );

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { reviews: review._id } }
        );

        return review;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    // ---------------------
    // USER FAVORITES MUTATIONS
    // ---------------------
    // add product to favorites
    addFavorite: async (parent, { productId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate( 
          { _id: context.user._id },
          { $addToSet: { favorites: productId } },
          { new: true }
        ).populate('favorites');

        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    // remove product from favorites
    removeFavorite: async (parent, { productId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { favorites: productId } },
          { new: true }
        ).populate('favorites');

        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    // ---------------------
    // VENDOR MUTATIONS
    // ---------------------
    // add new vendor

    // add product to vendor
    vendorProductAdd: async (parent, { vendorId, productId }) => {
      const updatedVendor = await Vendor.findOneAndUpdate( 
        { _id: vendorId },
        { $addToSet: { products: productId } },
        { new: true }
      ).populate('products');

      return updatedVendor;
    },
    
  },
};

module.exports = resolvers;
