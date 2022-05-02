import React from "react";
import "./Categories.css";

import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const iconBar = () => {
    const size = "50px";
    return (
        <div className="categories">
            <NavLink to={'/Countries/Italian'}>
                <FaPizzaSlice className="icons" size={size} />
            </NavLink>
            <NavLink to={'/Countries/American'}>
                <FaHamburger className="icons" size={size} />
            </NavLink>
            <NavLink to={'/Countries/Thia'}>
                <GiNoodles className="icons" size={size} />
            </NavLink>
            <NavLink to={'/Countries/Italian'}>
                <GiChopsticks className="icons" size={size} />
            </NavLink>
        </div>
    )
}
export default iconBar;