import React, {useState} from 'react';
import style from './SearchBar.module.css';

export default function SearchBar({onSearch}) {

    const [city, setCity] = useState("");

    var styleInput = {
        width: "400px"
    }

    return (
        <div>
            <form 
                className="form-inline d-flex flex-row"
                onSubmit={(e) => {
                    e.preventDefault();
                    onSearch(city);
                }}
            >
                <div className={style.searchBar}>
                    <input
                        className="form-control mr-sm-2"
                        style={styleInput}
                        type="search"
                        placeholder="Buscar ubicación"
                        aria-label="Search"
                        onChange={e => setCity(e.target.value)}
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
        </div>
    );
};