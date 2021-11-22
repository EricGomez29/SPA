import './App.css';
import React, { useState } from 'react';
import Cards from './components/cards/Cards.jsx';
import data, { Cairns } from './data.js';
import Nav from './components/nav/Nav';

function App() {

    const [cities, setCities] = useState([]);

    function onSearch(ciudad) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=c3c8b4a961bcafe40978f86648e8a58f`)
            .then(r => r.json())
            .then((recurso) => {
                if (recurso.main !== undefined) {
                    const ciudad = {
                        min: Math.round(recurso.main.temp_min),
                        max: Math.round(recurso.main.temp_max),
                        img: recurso.weather[0].icon,
                        id: recurso.id,
                        wind: recurso.wind.speed,
                        temp: recurso.main.temp,
                        name: recurso.name,
                        weather: recurso.weather[0].main,
                        clouds: recurso.clouds.all,
                        latitud: recurso.coord.lat,
                        longitud: recurso.coord.lon
                    };
                    setCities(oldCities => [...oldCities, ciudad]);
                } else {
                    alert("Ciudad no encontrada");
                }
            });

    }

    function onClose(id) {
        setCities(oldCities => oldCities.filter(c => c.id != id));
    }

    var title = {
        color: "white",
        margin: "50px"
    }

    return (
        <div className="App">

            <div>
                <Nav onSearch={onSearch} />
            </div>

            <div>
                <h1 style={title}>Clima en tiempo real</h1>
            </div>

            <div>
                <div>
                    <Cards
                        cities={cities}
                        onClose={onClose}
                    />
                </div>
            </div>

        </div>
    );
}

export default App;
