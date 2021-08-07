import React from 'react'
import Icon from "./Icon"

function Subscripciones  ({title, imageSource, url, precio, text1, text2, text3}) {
    return (
        <div className="card text-center bg-dark">
        <img src={imageSource} alt="" />
        <div className="card-body text-light">
            <h4 className="card-title">{title}</h4>
            <h1 className="card-text text-secondary">{precio}</h1>
            <p><Icon/> {text1}</p>
            <p><Icon/> {text2}</p>
            <p><Icon/> {text3}</p>
            <br></br>
            <a href={url} className="btn btn-outline-secondary rounded-0" target="_blank">
                Comprar
            </a>

        </div>
    </div>
    );
};

export default Subscripciones;