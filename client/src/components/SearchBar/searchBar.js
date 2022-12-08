import React from 'react'

function SearchBar({placeholder, data}) {
  return (
    <div className='search'>
        <div className='searchInput'></div>
            <input type='text' />
            <div className='searchIcon'></div>
        <div className='searchResult'></div>
    </div>
  )
}

export default SearchBar