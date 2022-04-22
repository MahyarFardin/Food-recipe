import React from "react";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react/cjs/react.production.min";

const Popular = () => {
    const [popular, setPopular] = useState([]);

    getPop;

    const getPop = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.API_KEY}&number=9`);
        const jsonData = await api.json();
        setPopular(jsonData.recipes);
    };

    return (
        <div>
            {
                popular.map(item => {
                    <div>
                        <p>
                            {item.title}
                        </p>
                    </div>
                })
            }
        </div>
    );
}

export default Popular;