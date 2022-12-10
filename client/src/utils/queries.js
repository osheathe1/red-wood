import { gql } from '@apollo/client';

// ------------------------------
// THOUGHT QUERIES - we can delete these once we have removed the references to them
// ------------------------------
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

// ------------------------------
// CHECKOUT QUERIES - are these for the cart?
// ------------------------------
export const QUERY_CHECKOUT = gql`
query getCheckout($products: [ID]!) {
  checkout(products: $products) {
    session
  }
}
`;

// ------------------------------
// USER/AUTH QUERIES
// ------------------------------
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
      email
      password
      username
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

// Search products by name
// export const QUERY_PRODUCTS_BY_NAME = gql`

// `;

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
      username
      text
      stars
    }
  }
}
`;

// Get products by category
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

// ------------------------------
// VENDOR QUERIES
// ------------------------------
export const QUERY_ALL_VENDORS = gql`
query Vendors {
  vendors {
    _id
    name
    products {
      _id
      name
      description
      category
      image
      price
      quantityInStock
    }
  }
}
`;

// Get vendor by ID
export const QUERY_VENDOR = gql`
query Vendor($vendorId: ID!) {
  vendor(vendorId: $vendorId) {
    _id
    name
    products {
      _id
      category
      name
      description
      image
      price
      quantityInStock
    }
  }
}
`;