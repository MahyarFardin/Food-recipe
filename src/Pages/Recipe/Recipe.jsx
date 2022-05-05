import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Recipe.css"

const Recipe = (e) => {
    const [recipe, setRecipe] = useState([]);
    const [text, setText] = useState("");

    let params = useParams();

    const fetchInfo = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const jsonData = await api.json();
        setRecipe(jsonData);
    }

    useEffect(() => {
        fetchInfo();
    }, [params.name]);

    const handleClick = (e) => {
        e.preventDefault();
        if (e.target.innerHTML === "Instructions")
            setText("2")
        else
            setText("1")
    }

    return (
        <div className="container">
            <h3 className="recipe-title">{recipe.title}</h3>

            <div className="buttons">
                <button onClick={e => { handleClick(e) }}>Instructions</button>
                <button onClick={e => { handleClick(e) }}>Ingridiants</button>
            </div>

            <div className="container-info">
                <img className="recipe-img" src={`${recipe.image}`} alt="" />
                <div className="p-container">
                    <p dangerouslySetInnerHTML={{ __html: text === "1" ? recipe.summary : recipe.instructions }} className="recipe-p" />
                </div>
            </div>
        </div>
    )
}

export default Recipe;