import React from "react";
import Card from "../Card/Card";
import "./Container.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";


const Container = ({ popular }) => {

    return (
        <div>
            <Splide>
                {popular.map(item => {
                    return (
                        <SplideSlide>
                            < Card item={item} className="card-item" />
                        </SplideSlide>
                    )
                })}
            </Splide>
        </div>
    )
}
export default Container;