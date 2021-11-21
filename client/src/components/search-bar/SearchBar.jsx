import React from 'react';
import style from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
    return (
        <form 
            className="form-inline d-flex flex-row"
            onSubmit={(e) => {
                e.preventDefault();
                onSearch("Cairns");
            }}
        >
            <div className={style.searchBar}>
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Buscar ubicación"
                    aria-label="Search"
                />
            </div>
            <div>
                <button
                    className="btn btn-success my-2 my-sm-0"
                    type="submit">
                    Buscar
                </button>
            </div>
        </form>
    );
};