import React from 'react';
import SearchBar from '../search-bar/SearchBar';

export default function Nav({onSearch}) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <SearchBar onSearch={onSearch} />
        </nav>
    );
};