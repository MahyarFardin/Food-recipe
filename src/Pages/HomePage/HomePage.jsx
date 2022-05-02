import React from "react";
import Framer from "../../Components/Framer/Framer";
import "./HomePage.css";

const HomePage = () => (
    <div className="home-page">
        <Framer numberOfCards={4} cardStyle={"small"} tag={"populer"} header={"Most Populer"}/>
        <Framer numberOfCards={3} cardStyle={"larg"} tag={"Veggies"} header={"Vegetarian"}/>
    </div>
)

export default HomePage;