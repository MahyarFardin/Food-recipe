import React from "react";
import { useEffect, useState } from "react/cjs/react.development";

const Popular = () => {
    const [popular, setPopular] = useState([]);

    useEffect(() => { getPop(); }, []);

    const getPop = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
        const jsonData = await api.json();
        setPopular(jsonData.recipes);
    };

    return (
        <div>
            {
                popular.map((item) => {
                    return (
                        <div key={item.id}>
                            <p>{item.title}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Popular;