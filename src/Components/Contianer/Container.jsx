import React from "react";
import Card from "../Card/Card";
import "./Container.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';


const Container = ({ numberOfCards, items, cardStyle }) => {

    return (
        <Splide options={{
            perPage: numberOfCards,
            pagination: false,
            arrows: false,
            type:"loop"
        }}>
            {items.map(item => {
                return (
                    <SplideSlide>
                        < Card item={item} cardStyle={cardStyle} />
                    </SplideSlide>
                )
            })}
        </Splide>
    )
}
export default Container;