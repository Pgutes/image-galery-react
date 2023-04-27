import React from "react";
import "./Card.css";

const Card = ({imageUrl, title, description}) =>{
    return(
        <>
        <div className="card">
            <div className="imagen">
            <img src={imageUrl} alt={title} />
            </div>
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{description}</p>  
            </div>
            <div className="button">
                <a href="#" className="btn btn-primary">boton</a>
            </div>
        </div>
        </>
    )
}

export default Card;