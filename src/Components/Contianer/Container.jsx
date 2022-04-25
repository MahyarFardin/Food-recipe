import React from "react";
import Card from "../Card/Card";

const Container = ({ popular }) => {

    return (
        <div>
            {popular.map(item => < Card item={item} />)}
        </div>
    )
}
export default Container;