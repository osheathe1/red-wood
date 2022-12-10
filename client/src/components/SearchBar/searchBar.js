import React from 'react'

function SearchBar({placeholder, data}) {
  return (
    <div className='search'>
        <div className='searchInput'></div>
            <input id='search-text-input' type='text' placeholder='Find a product'/>
            <div className='searchIcon'></div>
        <div className='searchResult'></div>
    </div>
  )
}

export default SearchBar