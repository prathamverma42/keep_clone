import React from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
const Search = () => {
    return(
        <div className="search">
            <SearchIcon className="search-icon" />
            <input value="Search" placeholder="Search"/>
        </div>
    );
}
export default Search;