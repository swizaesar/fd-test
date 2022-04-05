import React from "react";
import Style from "./style";

const Rating = ({ rating = 0, rate = true, rated = 7 }) => {
    return (
        <Style>
            {rate && <span>{rating} </span>}
            {[...Array(5)].map((el, i) => (
                <i
                    key={i}
                    className={`fa fa-star ${
                        i < Math.floor(rating) ? "active" : ""
                    }`}
                ></i>
            ))}{" "}
            {rate && <span className="rated">({rated})</span>}
        </Style>
    );
};
export default Rating;
