import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import Auth from '../../utils/auth';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        <div className='footer-btn-container'>
          {location.pathname !== '/' && (
            <button
              className="btn btn-dark mb-3 footer-btn"
              onClick={() => navigate(-1)}
            >
              &larr; Go Back
            </button>
          )}

          {(Auth.loggedIn()) ?
            <button
                className="btn btn-dark mb-3 footer-btn"
                onClick={logout}
                >
                  Logout
                </button> : null
          }
        </div>
        <h4>
          <Link to='/aboutus' > About Us </Link>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
