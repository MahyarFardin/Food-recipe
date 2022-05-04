import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const Search = () => {
    const [item, setItem] = useState();
    const navigate=useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/category/"+item);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="search-div">
                <input type={"search"} className="search" onChange={e => setItem(e.target.value)} placeholder="Search for other categories" />
            </div>
        </form>
    )
}

export default Search;