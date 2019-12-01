import React from 'react';
import './search-box.styles.css';

const SearchBox = ({ placeholder, searchHandler }) => (
    <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={searchHandler} />
)

export default SearchBox;