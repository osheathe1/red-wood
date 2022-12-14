import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import { Product } from './components/Product';
import AboutUs from './pages/AboutUs';
import Cart from './components/Cart';
import { StoreProvider } from './utils/GlobalState';
import Categories from './pages/Categories';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>

      <StoreProvider>

      <Navbar />
      
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container">
            <Routes>
              <Route 
                path="/"
                element={<Home />}
              />
              <Route 
                path="/login" 
                element={<Login />}
              />
              <Route 
                path="/signup" 
                element={<Signup />}
              />
              <Route 
                path="/me" 
                element={<Profile />}
              />
              <Route 
                path="/profiles/:username" 
                element={<Profile />}
              />
              <Route 
                path="/product/:productId" 
                element={<Product />}
              />
              <Route 
                path="/aboutus" 
                element={<AboutUs />}
              />
              <Route 
                path="/cart" 
                element={<Cart />}
              />
              <Route 
                path="/categories" 
                element={<Categories />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
        </StoreProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
