import React from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../../Components/Card/Card";
import "./Countries.css";

const Countries = () => {
    const [foods, setFoods] = useState([]);
    let params = useParams();

    useEffect(() => { informationFetch(params.type); }, [params.type]);

    const informationFetch = async (countrie) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${countrie}`);
        const jsonData = await api.json();
        setFoods(jsonData.results);
    };

    return (
        <div className="countires">
            <h3>{params.type}</h3>
            {
                foods.map(item => {
                    return(
                        <Card key={item.id} item={item} cardStyle={"small"}/>
                    )
                })
            }
        </div>
    )
}

export default Countries;