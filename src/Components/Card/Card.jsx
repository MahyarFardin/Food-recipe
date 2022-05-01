import React from "react";
import "./Card.css";

const Card = ({ item }) => {
    return (
        <div className="card-in">
            <img src={`${item.image}`} alt="image of food" />
            <span>{item.title}</span>
        </div>
    )
}
export default Card;