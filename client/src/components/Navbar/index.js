import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";
import SearchBar from "../SearchBar/searchBar";
import Auth from "../../utils/auth";
// import ProductData from '../../../../server/seeders/productSeeds.json'


function Navbar() {
  return (
    <div className="nav">
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/categories"> Categories </Link>
        <SearchBar placeholder='Search' />
        {(!Auth.loggedIn()) ?
          <Link to="/login"> Login </Link>
          : <Link to="/me">Profile</Link>
        }
        <Link to="/cart"> Cart </Link>
      </div>
    </div>
  );
}

export default Navbar;
