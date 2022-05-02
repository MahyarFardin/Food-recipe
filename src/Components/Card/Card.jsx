import React from "react";
import "./Card.css";

const Card = ({ item, cardStyle}) => {
    return (
        <div key={item.id} className={`card-in ${cardStyle}`}>
            <img src={`${item.image}`} alt="image of food" />
            <span>{item.title}</span>
        </div>
    )
}
export default Card;