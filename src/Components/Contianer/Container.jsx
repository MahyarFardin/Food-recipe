import React from "react";
import Card from "../Card/Card";
import "./Container.css";

const Container = ({ popular }) => {

    return (
        <div className="container">
            {popular.map(item => < Card item={item} className="card-item" />)}
        </div>
    )
}
export default Container;