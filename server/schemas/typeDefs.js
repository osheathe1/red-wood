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
    productId: [Product]!
    text: String
    username: String
    stars: Int
    createdAt: String
  }

  type Vendor {
    _id: ID
    name: String
    products: [Product]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    products: [Product]
    product(productId: ID!): Product
    productsByCategory(category: String!): [Product]
    reviews: [Review]
    review(reviewId: ID!): Review
    vendors: [Vendor]
    vendor(vendorId: ID!): Vendor
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addProduct(name: String!, description: String!, price: Float!, category: String!, quantityInStock: Int!, image: String!, vendor: String!): Product
    updateProduct(productId: ID!, name: String!, description: String!, price: Float!, category: String!, quantityInStock: Int!, image: String!, vendor: String!): Product
    deleteProduct(productId: ID!): Product
    addReview(text: String!, stars: Int!, productId: ID!): Product
    removeReview(reviewId: ID!): Product
    addFavorite(productId: ID!): User
    removeFavorite(productId: ID!): User
    vendorProductAdd(productId: ID!, vendorId: ID!): Vendor
  }
`;

module.exports = typeDefs;
