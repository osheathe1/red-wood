import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";
import SearchBar from "../SearchBar/searchBar";
import Auth from "../../utils/auth";
import Cart from "../Cart";
// import ProductData from '../../../../server/seeders/productSeeds.json'


function Navbar() {
  return (
    <div className="nav">
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/categories"> Categories </Link>
        <SearchBar placeholder="Enter a Product Name..." data />
        {(!Auth.loggedIn()) ?
          <Link to="/login" className='single-login-link'> Login </Link>
          : 
            <Link to="/me" className='single-login-link'>Profile</Link>
        }
        <Link to="/cart"/> 
        <Cart />
      </div>
    </div>
  );
}

export default Navbar;
