import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Search.css";

const Search = () => {
    const [item, setItem]=useState();

    return (
        <div className="search-div">
            <NavLink to={`/Countries/`}>
                <input type={"search"} className="search" onChange={e=>setItem(e)} placeholder="Search for other categories" />
            </NavLink>
        </div>
    )
}

export default Search;