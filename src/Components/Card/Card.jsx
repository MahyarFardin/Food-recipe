import React from "react";

const Card = ({ item }) => {
    return (
        <div>
            <img src={`${item.image}`} alt="image of food" />
            <span>{item.title}</span>
        </div>
    )
}
export default Card;