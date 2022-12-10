import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/redwood-logo.png'

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="custom-bg-color text-light mb-4 py-3 flex-column justify-center align-center custom-header">
      <div className="container flex-row justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <img src={logo} alt='redwood-logo' className="m-0 custom-title"></img>
          </Link>
          {/* <p className="m-0 custom-sub-title">Biggest wood in town!</p> */}
        </div>
        {/* <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div> */}
      </div>
      <div className='guiding-arrow'><span>&#8595;</span></div>
    </header>
  );
};

export default Header;
