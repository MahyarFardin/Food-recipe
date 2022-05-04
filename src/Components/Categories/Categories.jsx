import React from "react";
import "./Categories.css";

import { FaPizzaSlice, FaHamburger, FaHome } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const iconBar = () => {
    const size = "50px";
    return (
        <div className="categories">
            <NavLink style={({ isActive }) =>
                isActive
                    ? {
                        color: '#fff',
                        background: '#545e6f',
                    }
                    : { color: '#545e6f' }
            } to={'/'}>
                <FaHome className="icons" size={size} />
            </NavLink>

            <NavLink style={({ isActive }) =>
                isActive
                    ? {
                        color: '#fff',
                        background: '#545e6f',
                    }
                    : { color: '#545e6f' }
            } to={'/category/Italian'}>
                <FaPizzaSlice className="icons" size={size} />
            </NavLink>

            <NavLink
                style={({ isActive }) =>
                    isActive
                        ? {
                            color: '#fff',
                            background: '#545e6f',
                        }
                        : { color: '#545e6f' }
                }
                to={'/category/American'}>
                <FaHamburger className="icons" size={size} />
            </NavLink>

            <NavLink
                style={({ isActive }) =>
                    isActive
                        ? {
                            color: '#fff',
                            background: '#545e6f',
                        }
                        : { color: '#545e6f' }
                } to={'/category/Thai'}>
                <GiNoodles className="icons" size={size} />
            </NavLink>

            <NavLink
                style={({ isActive }) =>
                    isActive
                        ? {
                            color: '#fff',
                            background: '#545e6f',
                        }
                        : { color: '#545e6f' }
                } to={'/category/Japanese'}>
                <GiChopsticks className="icons" size={size} />
            </NavLink>
        </div>
    )
}
export default iconBar;