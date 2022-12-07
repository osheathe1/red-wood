const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    reviews: [Review]!
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
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addThought(thoughtText: String!): Thought
    addComment(thoughtId: ID!, commentText: String!): Thought
    removeThought(thoughtId: ID!): Thought
    removeComment(thoughtId: ID!, commentId: ID!): Thought
  }
`;

module.exports = typeDefs;
