import { gql } from '@apollo/client';

// ------------------------------
// THOUGHT MUTATIONS - we can delete these once we have removed the references to them
// ------------------------------
export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!) {
    addThought(thoughtText: $thoughtText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;


// ------------------------------
// USER MUTATIONS
// ------------------------------
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// add favorite
export const ADD_TO_FAVORITES = gql`
mutation Mutation($productId: ID!) {
  addFavorite(productId: $productId) {
    _id
    username
    favorites {
      _id
      name
      description
      category
      price
      quantityInStock
      vendor
      image
    }
  }
}
`;

// remove favorite
export const REMOVE_FROM_FAVORITES = gql`
mutation Mutation($productId: ID!) {
  removeFavorite(productId: $productId) {
    _id
    username
    email
    favorites {
      _id
      category
      description
      image
      name
      price
      quantityInStock
      vendor
    }
  }
}
`;

// add review
export const ADD_REVIEW = gql`
mutation Mutation($text: String!, $stars: Int!, $productId: ID!) {
  addReview(text: $text, stars: $stars, productId: $productId) {
    _id
    category
    createdAt
    description
    image
    name
    price
    quantityInStock
    vendor
  }
}
`;

// remove review
export const REMOVE_REVIEW = gql`
mutation Mutation($reviewId: ID!) {
  removeReview(reviewId: $reviewId) {
    _id
    category
    description
    image
    name
    price
    quantityInStock
    vendor
  }
}
`;

// ------------------------------
// PRODUCT MUTATIONS
// ------------------------------
export const ADD_PRODUCT = gql`
mutation Mutation($name: String!, $description: String!, $price: Float!, $category: String!, $quantityInStock: Int!, $image: String!, $vendor: String!) {
  addProduct(name: $name, description: $description, price: $price, category: $category, quantityInStock: $quantityInStock, image: $image, vendor: $vendor) {
    _id
    category
    createdAt
    description
    image
    name
    quantityInStock
    price
    vendor
  }
}
`;

export const UPDATE_PRODUCT = gql`
mutation Mutation($productId: ID!, $name: String!, $description: String!, $price: Float!, $category: String!, $quantityInStock: Int!, $image: String!, $vendor: String!) {
  updateProduct(productId: $productId, name: $name, description: $description, price: $price, category: $category, quantityInStock: $quantityInStock, image: $image, vendor: $vendor) {
    _id
    category
    createdAt
    description
    image
    name
    price
    quantityInStock
    vendor
  }
}
`;

// export const REMOVE_PRODUCT = gql`

// `;