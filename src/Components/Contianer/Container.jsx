import React from "react";
import Card from "../Card/Card";
import "./Container.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';


const Container = ({ popular }) => {

    return (
        <Splide options={{
            perPage: 4,
            pagination: false,
            gap: "5rem",
            arrows: false
        }}>
            {popular.map(item => {
                return (
                    <SplideSlide>
                        < Card item={item} className="card-item" />
                    </SplideSlide>
                )
            })}
        </Splide>
    )
}
export default Container;