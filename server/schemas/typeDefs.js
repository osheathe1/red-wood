const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    reviews: [Review]!
    favorites: [Product]!
  }

  type Product {
    _id: ID
    name: String
    description: String
    price: Float
    category: String
    quantityInStock: Int
    image: String
    vendor: String
    reviews: [Review]!
    createdAt: String
  }

  type Review {
    _id: ID
    text: String
    username: String
    stars: Int
    createdAt: String
  }

  type Vendor {
    _id: ID
    name: String
    products: [Product]!

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    products: [Product]
    product(productId: ID!): Product
    vendors: [Vendor]
    vendor(vendorId: ID!): Vendor
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addReview(text: String!, stars: Int!, productId: ID!): Product
    removeReview(reviewId: ID!): Product
    addProduct(name: String!, description: String!, price: Float!, category: String!, quantityInStock: Int!, image: String!, vendor: String!): Product
    addVendor(name: String!): Vendor
    addFavorite(productId: ID!): User
    removeFavorite(productId: ID!): User
  }
`;

module.exports = typeDefs;
