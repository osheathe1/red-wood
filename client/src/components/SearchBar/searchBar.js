import React from 'react'
import "../../styles/Navbar.css";
function SearchBar({placeholder, data}) {
  return (
    <div className='search'>
        <div className='searchInput'></div>
            <input id='search-text-input' type='text' placeholder='Find a product'/>
            
            <button type="submit" className='searchIcon'>Search</button>
            
        <div className='searchResult'></div>
    </div>
  )
}

export default SearchBar