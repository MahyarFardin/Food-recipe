import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ item, cardStyle }) => {
    return (
        <div key={item.id} className={`card-in ${cardStyle}`}>
            <Link to={"/recipe/" + item.id}>
                <img src={`${item.image}`} alt="image of food" />
                <span>{item.title}</span>
            </Link>
        </div>
    )
}
export default Card;