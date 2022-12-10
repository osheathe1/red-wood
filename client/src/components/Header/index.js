import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/redwood-logo.png'

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  // const main_nav = document.querySelector('.guiding-arrow');

  // window.addEventListener("scroll", () => {
  //     var y = window.scrollY;
  //     if (y >= 1){
  //         main_nav.classList.add('disappear');
  //         return;
  //     }
  //     else{
  //         main_nav.classList.remove('disappear');
  //         // note that this is a class defined in your CSS.
  //     }
  // });

  return (
    <header className="custom-bg-color text-light mb-4 py-3 flex-column justify-center align-center custom-header">
      <div className="container flex-row justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <img src={logo} alt='redwood-logo' className="m-0 custom-title"></img>
          </Link>
        </div>
      </div>
      <div className='guiding-arrow'><span>&#8595;</span></div>
    </header>
  );
};

export default Header;
