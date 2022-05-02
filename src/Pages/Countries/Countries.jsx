import React from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Countries = () => {
    const [foods, setFoods] = useState([]);
    let params = useParams();

    useEffect(() => { informationFetch(params.type); }, [params.type]);

    const informationFetch = async (countrie) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${countrie}`);
        const jsonData = await api.json();
        setFoods(jsonData.recipes);
    };

    return (
        <div>
            {
                foods.map(food => {
                    console.log(food);
                })
            }
        </div>
    )
}

export default Countries;