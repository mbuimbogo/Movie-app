import React from 'react'
import { useState } from 'react'

const Search = (search) => {
    const [searchValue, setSearchValue] = useState("");
  return (
    <form className='search'>
        <input 
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
        />
        <input onClick= {callSearchFunction} type="submit" value="SEARCH"></input>

    </form>
  )
}

export default Search