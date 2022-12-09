import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_THOUGHTS = gql`
  query getThoughts {
    thoughts {
      _id
      thoughtText
      thoughtAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_THOUGHT = gql`
  query getSingleThought($thoughtId: ID!) {
    thought(thoughtId: $thoughtId) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
query getCheckout($products: [ID]!) {
  checkout(products: $products) {
    session
  }
}
`;

// ------------------------------
// PRODUCT QUERIES
// ------------------------------
export const QUERY_ALL_PRODUCTS = gql`
query Products {
  products {
    _id
    name
    description
    price
    quantityInStock
    category
    image
    vendor
    reviews {
      _id
    }
  }
}
`;

// Get product by ID
export const QUERY_PRODUCT = gql`
query Products($productId: ID!) { 
  product(productId: $productId) {
    _id
    category
    name
    description
    image
    price
    quantityInStock
    vendor
    createdAt
    reviews {
      _id
    }
  }
}
`;

export const QUERY_PRODUCTS_BY_CATEGORY = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

