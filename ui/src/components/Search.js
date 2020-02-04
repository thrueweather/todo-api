import React from 'react'

function Search(props) {
    return (
        <input type="search" placeholder="Search on List" onChange={(e) => props.setSearchValue(e.target.value)}/>
    )
}

export default Search
