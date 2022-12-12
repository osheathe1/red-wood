import React from 'react';

import logo from '../../assets/images/redwood-logo.png'

const Header = () => {
  return (
    <header className="custom-bg-color text-light mb-4 py-3 flex-column justify-center align-center custom-header">
      <div className="container flex-row justify-center align-center">
        <div>
          <img src={logo} alt='redwood-logo' className="m-0 custom-title"></img>
        </div>
      </div>
      <div className='guiding-arrow'><span>&#8595;</span></div>
    </header>
  );
};

export default Header;
