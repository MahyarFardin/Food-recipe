import React from "react";
import { useState, useEffect } from 'react';
import Container from "../Contianer/Container";
import "./Framer.css"

const Framer = ({numberOfCards, tag, header, cardStyle}) => {
    const [info, setInfo] = useState([]);

    useEffect(() => { informationFetch(); }, []);

    const informationFetch = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&${tag}`);
        const jsonData = await api.json();
        setInfo(jsonData.recipes);
    };

    return (
        <div className="framer-container">
            <h3>{header}</h3>
            <Container cardStyle={cardStyle} numberOfCards={numberOfCards} items={info} />
        </div>
    );
}

export default Framer;