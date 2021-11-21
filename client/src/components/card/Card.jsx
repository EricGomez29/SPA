import React from 'react';

export default function Card(props) {
    
    var style = {
        width: '300px'
    }

    return (
        <div>
            <div className="card p-3" style={style}>
                <div className="d-flex flex-row-reverse">
                    <button className="btn btn-danger" onClick={props.onClose}>X</button>
                </div>
                <div className="card-body">
                    <h5 className ="card-title">{props.name}</h5>
                    <div className="d-flex justify-content-around">
                        <p className ="card-text">Min: {props.min}º</p>
                        <p className ="card-text">Max: {props.max}º</p>
                    </div>
                    <img src={"http://openweathermap.org/img/wn/" + props.img + "@2x.png"} alt="" />    
                </div>
            </div>
        </div>
    );
};