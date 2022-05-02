import React from "react";
import { useState, useEffect } from 'react';
import Container from "../Contianer/Container";
import "./Popular.css"

const Popular = () => {
    const [popular, setPopular] = useState([]);

    useEffect(() => { getPop(); }, []);

    const getPop = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
        const jsonData = await api.json();
        setPopular(jsonData.recipes);
    };

    return (
        <div className="popular-container">
            <h3>Popular Foods</h3>
            <Container popular={popular} />
        </div>
    );
}

export default Popular;