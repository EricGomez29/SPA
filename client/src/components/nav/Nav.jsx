import React from 'react';
import SearchBar from '../search-bar/SearchBar';

export default function Nav({onSearch}) {

    var style = {
        height: "80px"
    }

    return (
        <nav className="navbar navbar-dark bg-dark" style={style}>
            <SearchBar onSearch={onSearch} />
        </nav>
    );
};