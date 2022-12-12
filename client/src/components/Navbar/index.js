import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/Navbar.css";
import SearchBar from "../SearchBar/searchBar";
import Auth from "../../utils/auth";
import Cart from "../Cart";
// import ProductData from '../../../../server/seeders/productSeeds.json'
import ReorderIcon from "@mui/icons-material/Reorder";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS } from "../../utils/queries";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
      setExpandNavbar(false);
    }, [location]);

  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
  if(loading){
    return <div>Loading...</div>
  } else {
    const products = data?.products || [];
    // console.log(products)

  return (
    <div className="nav" id={expandNavbar ? "open" : "close"}>
    <div className="toggleButton">
      <button
        onClick={() => {
          setExpandNavbar((prev) => !prev);
        }}
      >
        <ReorderIcon />
      </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/categories"> Categories </Link>
        <SearchBar placeholder="Enter a Product Name..." data={products} />
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
}

export default Navbar;
