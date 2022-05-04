import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Recipe.css"

const Recipe = (e) => {
    const [recipe, setRecipe] = useState([]);

    let params = useParams();

    const fetchInfo = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const jsonData = await api.json();
        setRecipe(jsonData);
    }

    useEffect(() => {
        fetchInfo();
    }, [params.name]);

    return (
        <div className="container">
            <h3>{recipe.title}</h3>
            <img src={`${recipe.image}`} alt="" />
            <p>{recipe.summary}</p>
        </div>
    )
}

export default Recipe;